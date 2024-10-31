import Phaser from "phaser";
import WebFont from "webfontloader";

export default class Lose extends Phaser.Scene{

    constructor(){
        super('lose-screen')
    }

    preload(){}

    create(){
        this.add.text(600, 100, 'You lost the game!', { 
            fontFamily: '"Press Start 2P"',
            fontSize: '32px', 
            color: '#fff' 
        }).setOrigin(0.5);

        this.restart= this.add.text(600, 200, 'RESTART?', { 
            fontFamily: '"Press Start 2P"',
            fontSize: '16px', 
            color: '#fff' 
        }).setOrigin(0.5).setInteractive();

        this.restart.on('pointerdown', () => {
        this.selectedCar='';
        this.scene.start('title-screen');
        });
    }
}