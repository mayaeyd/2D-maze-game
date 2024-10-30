import Phaser from "phaser";

export default class Preloader extends Phaser.Scene{
    constructor(){
        super('preloader')
    }

    init(data) {
        //get the selected car
        this.selectedCar= data.selectedCar; 
    }

    preload(){
        this.car= this.load.image(this.selectedCar, `./../assets/${this.selectedCar}.png`);
        
    }

    create(){
        this.startGame(this.selectedCar)
    }

    startGame(selectedCar){
        this.scene.start('game-screen',{selectedCar})
    }
}