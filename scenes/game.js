import Phaser from 'phaser'
import WebFontFile from './webFontFile'


export default class Game extends Phaser.Scene{

    init(data) {
        //get the selected car
        this.selectedCar= data.selectedCar; 
        console.log('Selected Car:', this.selectedCar);
    }

    preload(){
        this.load.image(this.selectedCar, `assets/${this.selectedCar}.png`);
    }

    create(){
        this.add.text(600,300,'game')
    }
}
