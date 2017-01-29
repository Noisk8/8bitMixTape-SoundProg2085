# 8bitMixTape-SoundProg2085
 New Attiny85 based edition with Bootloader to program it via sound

Inspired by the bootloader for atmega by Christoph Haberer and other implementations by Fredrik...
* http://www.hobby-roboter.de/forum/viewtopic.php?f=4&t=127
* http://www.fredrikolofsson.com/f0blog/?q=node%2F596

Not found anything yet for attiny, except that's it's a bit more challenging to make bootloaders.
* http://www.mikrocontroller.net/articles/Konzept_f%C3%BCr_einen_ATtiny-Bootloader_in_C

Can we maybe use the same bootloader to program via blinking lights?
* https://www.wayneandlayne.com/blinky_programmer/

# Bootloader in progress
see devel repo here: https://github.com/ATtinyTeenageRiot/TinyAudioBoot

# Boards are being designed atm...

![Special Edition Gong Xi Fa Cai](https://github.com/8BitMixtape/8bitMixTape-SoundProg2085/blob/master/boards/images_schematics/85SoundProg_MixTape_V03-NEO_RedChicken.jpg)

![First prototype is being etched and soldered](https://github.com/8BitMixtape/8bitMixTape-SoundProg2085/raw/master/boards/FirstPrototype_Neo03/IMG_20170129_015545_HDR.jpg)

# Discussing the schematics
how to free even more pins on that little attiny85...

we need:
* 2 potentiometers
* 2 push-buttons
* 1 Sound output PWM (PB0 is preferred)
* Master-clock or gate output
* Sync-clock input
* CV input
* Sound-progger input
* 1 pin to communicate wiht the 8 NEO-pixels (is that cheating?)
* what else?

![Schematic of the first prototype, in progress](https://github.com/8BitMixtape/8bitMixTape-SoundProg2085/blob/master/boards/images_schematics/8Bit-MixTape_schematics2.png)
