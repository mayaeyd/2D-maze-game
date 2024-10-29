import Phaser from 'phaser'

export default class Game extends Phaser.Scene{

    preload(){

    }

    //1200x600

    create(){
        this.ball= this.add.circle(600, 300, 10, 0xffffff, 1)

    }

    update(){
        
    }
}
