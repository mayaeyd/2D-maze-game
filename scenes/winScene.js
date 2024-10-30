import Phaser from "phaser";
import WebFont from "webfontloader";

export default class Win extends Phaser.Scene{

    constructor(){
        super('win-screen')
    }

    init(data) {
        //get the selected car
        this.selectedCar= data.car; 
        console.log(this.selectedCar);

    }

    create(){
        this.add.text(600, 100, 'You reached the finish line!', { 
            fontFamily: '"Press Start 2P"',
            fontSize: '32px', 
            color: '#fff' 
        }).setOrigin(0.5);

        this.add.text(600, 200, 'Click on your car to go to the next level', { 
            fontFamily: '"Press Start 2P"',
            fontSize: '16px', 
            color: '#fff' 
        }).setOrigin(0.5);

        this.car = this.physics.add.sprite(600,400,this.selectedCar)  
       .setScale(3);

        this.car.setInteractive();
        this.car.on('pointerdown', () => {
            this.scene.start('moderate-screen',{car:this.selectedCar});
        });
    }
}