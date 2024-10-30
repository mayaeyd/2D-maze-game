import Phaser from "phaser";
import WebFont from "webfontloader";

export default class ModerateGame extends Phaser.Scene{

    constructor(){
        super('moderate-screen');
    }

    init(data) {
        //get the selected car
        this.selectedCar= data.car; 
        console.log(this.selectedCar);

    }
}