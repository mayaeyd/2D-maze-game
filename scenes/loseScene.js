import Phaser from "phaser";
import WebFont from "webfontloader";
import loseBG from './../assets/characters-bg.jpg'


export default class Lose extends Phaser.Scene{

    constructor(){
        super('lose-screen')
    }

    preload(){
        this.load.image('loseBG',loseBG)
    }

    create(){

        this.add.image(600,288,'loseBG')
        .setOrigin(0.5,0.5)
        .setScale(2.5,2.2);

        this.add.text(600, 100, 'You ran out of fuel!', { 
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