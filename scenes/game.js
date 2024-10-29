import Phaser from 'phaser'

export default class Game extends Phaser.Scene{

    preload(){

    }

    create(){
        this.add.text(600,300,'hello')
    }
}
