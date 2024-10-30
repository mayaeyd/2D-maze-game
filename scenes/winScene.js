import Phaser from "phaser";
import WebFont from "webfontloader";

export default class Win extends Phaser.Scene{

    constructor(){
        super('win-screen')
    }

    init(data) {
        //get the selected car
        this.selectedCar= data.car; 
        this.level = data.level;
        console.log(this.selectedCar);

    }

    create(){
        if(this.level==1){
            this.add.text(600, 100, 'You reached the finish line!', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '32px', 
                color: '#fff' 
            }).setOrigin(0.5);
    
            this.add.text(600, 200, 'Click on your car to go to the moderate level...', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '16px', 
                color: '#fff' 
            }).setOrigin(0.5);
            
            this.add.text(600, 250, 'But do not run out of fuel', { 
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
        else if(this.level==2){
            this.add.text(600, 100, 'You reached the finish line and \n still had fuel in the tank!', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '32px', 
                color: '#fff' 
            }).setOrigin(0.5);
    
            this.add.text(600, 200, 'Click on your car to go to the hard level...', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '16px', 
                color: '#fff' 
            }).setOrigin(0.5);
            
            this.add.text(600, 250, 'Do not forget to pick up the passengers', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '16px', 
                color: '#fff' 
            }).setOrigin(0.5);
    
            this.car = this.physics.add.sprite(600,400,this.selectedCar)  
           .setScale(3);
    
            this.car.setInteractive();
            this.car.on('pointerdown', () => {
                this.scene.start('hard-screen',{car:this.selectedCar});
            });
        }
        else if(this.level==3){
            this.add.text(600, 275, 'Congratulations!!!', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '32px', 
                color: '#fff' 
            }).setOrigin(0.5);
    
            this.add.text(600, 325, 'You finished the game🎉', { 
                fontFamily: '"Press Start 2P"',
                fontSize: '20px', 
                color: '#fff' 
            }).setOrigin(0.5);
            
        }
    }
}