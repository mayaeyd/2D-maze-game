import Phaser from "phaser";
import tiles from './../assets/tiles.png'
import tilemap from './../assets/tilemap.json'

export default class Preloader extends Phaser.Scene{
    constructor(){
        super('preloader')
    }

    init(data) {
        //get the selected car
        this.selectedCar= data.selectedCar; 
    }

    preload(){
        this.load.image('tiles',tiles)
        this.load.tilemapTiledJSON('maze',tilemap)
    }

    create(){
        this.startGame(this.selectedCar)
    }

    startGame(selectedCar){
        this.scene.start('game-screen',{selectedCar})
    }
}