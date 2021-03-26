export default class Bootloader extends Phaser.Scene{
    constructor(){
        super({ḱey: "Bootloader"});
    }

    preload(){
        this.load.on('complete', () => {
            this.scene.start('Scene_play');
        });
        this.load.image('fondo','./assets/1847.jpg');
        this.load.image('ball','./assets/ballN.png');
        this.load.image('left','./assets/left_pallete.gif');
        this.load.image('right','./assets/right_pallete.gif');
        this.load.image('separator','./assets/separator.gif');
        

    }
}