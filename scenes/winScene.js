import Phaser from "phaser";

export default class Win extends Phaser.Scene{

    constructor(){
        super('win-screen')
    }

    create(){
        console.log("In win screen");   
    }
}