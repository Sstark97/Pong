import Pallete from '../gameObjects/pallete.js'

export default class Scene_play extends Phaser.Scene{
    constructor(){
        super({key: "Scene_play"});
        this.h2 = document.getElementById('score');
        this.points1 = 0;
        this.poins2 = 0;
    }

    create(){
        this.add.image(this.sys.game.config.width,this.sys.game.config.height,'fondo');
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'separator');

        this.left = new Pallete(this,30,this.sys.game.config.height/2,"left");
        this.right = new Pallete(this,this.sys.game.config.width-30,this.sys.game.config.height/2,"right");

        this.physics.world.setBoundsCollision(false,false,true,true);
        this.ball = this.physics.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'ball');
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-100);

        this.physics.add.collider(this.ball,this.left,this.frontPallete,null,this);
        this.physics.add.collider(this.ball,this.right,this.frontPallete,null,this);

        this.cursor = this.input.keyboard.createCursorKeys();

        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    }

    update(){
        if(this.ball.x < 0){
            this.h2.innerText = `Score ${++this.points1}-${this.poins2}`;
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2);
        } else if(this.ball.x > this.sys.game.config.width){
            this.h2.innerText = `Score ${this.points1}-${++this.poins2}`;
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2);
        }

        if(this.cursor.down.isDown){
            this.right.body.setVelocityY(300);
        } else if(this.cursor.up.isDown){
            this.right.body.setVelocityY(-300);

        } else {
            this.right.body.setVelocityY(0);
        }

        if(this.cursor_S.isDown){
            this.left.body.setVelocityY(300);
        } else if(this.cursor_W.isDown){
            this.left.body.setVelocityY(-300);

        } else {
            this.left.body.setVelocityY(0);
        }


    }

    frontPallete(){
        this.ball.setVelocityY(Phaser.Math.Between(-120,120));
            
    }
}