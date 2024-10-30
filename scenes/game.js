import Phaser from 'phaser'
import WebFontFile from './webFontFile'
import tiles from './../assets/tiles.png'
import tilemap from './../assets/tilemap.json';


export default class Game extends Phaser.Scene{

    constructor(){
        super('game-screen')
    }

    init(data) {
        //get the selected car
        this.car= data.selectedCar; 
    }

    preload(){
        this.load.image('tiles', tiles)
        this.load.tilemapTiledJSON('maze',tilemap) 
    }

    create(){

       console.log('in game',this.car);
        
       this.map = this.add.tilemap({key:'maze'})
       this.maze = this.map.addTilesetImage('tilemap', 'tiles')

       this.map.createStaticLayer('Ground', this.maze)
       
    }
}
