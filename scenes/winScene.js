import Phaser from "phaser";
import WebFont from "webfontloader";
import winBG from './../assets/characters-bg.jpg'


export default class Win extends Phaser.Scene{

    constructor(){
        super('win-screen')
    }

    init(data) {
        //get the selected car
        this.selectedCar= data.car; 
        this.level = data.level;
    }

    preload(){
        this.load.image('winBG',winBG)
    }

    create(){
        this.add.image(600,288,'winBG')
        .setOrigin(0.5,0.5)
        .setScale(2.5,2.2);

        if(this.level=='moderate'){
            this.add.text(600, 100, 'You reached the finish line!', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '32px', 
                color: '#fff' 
            }).setOrigin(0.5);
    
            this.add.text(600, 200, 'Click on your car to go to the moderate level...', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '16px', 
                color: '#000' 
            }).setOrigin(0.5);
            
            this.add.text(600, 250, 'But do not run out of fuel', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '16px', 
                color: '#000' 
            }).setOrigin(0.5);
    
            this.addCarImage(this.car, this.level);
        }

        //moderate level 
        else if(this.level=='hard'){
            this.add.text(600, 100, 'You reached the finish line and \n still had fuel in the tank!', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '32px', 
                color: '#fff' 
            }).setOrigin(0.5);
    
            this.add.text(600, 200, 'Click on your car to go to the hard level...', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '16px', 
                color: '#000' 
            }).setOrigin(0.5);
            
            this.add.text(600, 250, 'But do not forget to pick up the passengers', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '16px', 
                color: '#000' 
            }).setOrigin(0.5);
            
            this.addCarImage(this.car,this.level);
        }

        //hard level
        else if(this.level=='finished'){
            this.add.text(600, 275, 'Congratulations!!!', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '32px', 
                color: '#000' 
            }).setOrigin(0.5);
    
            this.add.text(600, 325, 'You finished the game🎉', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '20px', 
                color: '#000' 
            }).setOrigin(0.5);
            
        }
    }

    addCarImage(car, level){
        const selectedCar = this.selectedCar
        car = this.physics.add.sprite(600,400,selectedCar)  
        .setScale(3);
    
        car.setInteractive();
        car.on('pointerdown', () => {
        this.scene.start(`${level}-screen`,{car:selectedCar});
        });
    }
    
}