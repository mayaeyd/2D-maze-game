import Phaser from 'phaser'
import WebFontFile from './webFontFile'
import {Game} from './../utilities/sceneKeys'

export default class Characters extends Phaser.Scene{

    // constructor() {
    //     super('Characters');
    // }

    preload(){
        const fonts = new WebFontFile(this.load, 'Press Start 2P')
        this.load.addFile(fonts)

        this.load.image('pinkcar','assets/pinkcar.png');
        this.load.image('yellowcar','assets/yellowcar.png');
        this.load.image('greencar','assets/greencar.png');
        

    }

    //1200x600

    create(){
        const title = this.add.text(600, 75, 'Choose Your Car',{
            fontSize: 50,
            fontFamily: '"Press Start 2P"'
        })
        .setOrigin(0.5, 0.5)

        this.pinkcar= this.add.image(300,300,'pinkcar').setInteractive();
        this.yellowcar= this.add.image(600,300,'yellowcar').setInteractive();
        this.greencar= this.add.image(900,300,'greencar').setInteractive();

        this.pinkcar.on('pointerdown', () => this.startGame('pinkcar'));
        this.yellowcar.on('pointerdown', () => this.startGame('yellowcar'));
        this.greencar.on('pointerdown', () => this.startGame('greencar'));
    }
    
    startGame(selectedCar) {
        this.scene.start('game-screen');
    }
}
