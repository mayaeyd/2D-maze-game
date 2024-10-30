import Phaser from 'phaser'
import WebFontFile from './webFontFile'
import pinkcar from './../assets/pinkcar.png'
import yellowcar from './../assets/yellowcar.png';
import greencar from './../assets/greencar.png';

export default class Characters extends Phaser.Scene{

    constructor(){
        super('characters-screen')
    }

    preload(){
        const fonts = new WebFontFile(this.load, 'Press Start 2P')
        this.load.addFile(fonts)

        this.load.image('pinkcar',pinkcar);
        this.load.image('yellowcar',yellowcar);
        this.load.image('greencar',greencar);
    }

    //1200x600

    create(){
        const title = this.add.text(600, 75, 'Choose Your Car',{
            fontSize: 50,
            fontFamily: '"Press Start 2P"'
        })
        .setOrigin(0.5, 0.5)

        this.pinkcar= this.add.image(300,300,'pinkcar')
        .setInteractive()
        .setScale(3.4);

        this.yellowcar= this.add.image(600,300,'yellowcar')
        .setInteractive()
        .setScale(2.9);

        this.greencar= this.add.image(900,300,'greencar')
        .setInteractive()
        .setScale(3.7);

        this.pinkcar.on('pointerdown', () => this.startGame('pinkcar'));
        this.yellowcar.on('pointerdown', () => this.startGame('yellowcar'));
        this.greencar.on('pointerdown', () => this.startGame('greencar'));
    }

    startGame(selectedCar) {
        this.scene.start('preloader', {selectedCar});
    }
}
