window.addEventListener('load', init, false);
function init() {

    //--webaudio
    var audioCtx, audio;
    try {
        window.AudioContext= window.AudioContext||window.webkitAudioContext;
        audioCtx= new AudioContext();
    }
    catch(e) {
        alert('Web Audio API is not supported in this browser');
    }

    //--hex data input
    document.querySelector('#hexfileInput').onchange= function(e) {
        var file= e.target.files[0];
        if(file) {
            var reader= new FileReader();
            reader.onload= function(ee) {
                var hexData= ee.target.result;
                //console.log('name: '+file.name+'\n'+'type: '+file.type+'\n'+'size: '+file.size+'\n'+'contents: '+hexData);
                if(hexData[0]===':') { //TODO also check min/max filesize?
                    document.querySelector('#hexRaw').value= hexData;
                    var event= new Event('change');
                    document.querySelector('#hexRaw').dispatchEvent(event);
                } else {
                    alert('Failed to load hex file - not a proper hex file');
                }
            }
            reader.readAsText(file);
        } else {
            alert('Failed to load hex file');
        }
    }
    document.querySelector('#hexRaw').onchange= function(e) {
        var res= decodeHexFile(this.value);
        var str= '';
        for(var i= 0; i<res.length; i++) {
            var a= res[i];
            for(var j= 0; j<a.length; j++) {
                var hex= a[j].toString(16);
                str= str+('00'+hex).substring(hex.length)+' ';
            }
            str= str+'\n';
        }
        document.querySelector('#hexDecoded').value= str;
        audio= generateAudio(audioCtx);
    }

    //--play
    document.querySelector('#playButton').onclick= function() {
        if(audio) {
            var src= audioCtx.createBufferSource();
            src.buffer= audio;
            src.connect(audioCtx.destination);
            src.start();
        }
    }
}
