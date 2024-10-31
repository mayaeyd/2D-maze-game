import Phaser from "phaser";
import WebFontFile from './webFontFile'
import background from './../assets/title-bg.jpg'

export default class TitleScene extends Phaser.Scene {
    
    constructor(){
        super('title-screen')
    }

    preload() {
        const fonts = new WebFontFile(this.load, 'Press Start 2P')
        this.load.addFile(fonts)
        this.load.image('background',background)
    }

    create() {
        this.add.image(600,288,'background')
        .setOrigin(0.5,0.5)
        .setScale(2.5,1.6);

        this.add.text(600, 200, 'Roadway Riddle', { 
            fontSize: '48px', 
            fill: 'black',
            fontFamily:'"Press Start 2P"' 
        }).setOrigin(0.5);

        const startButton = this.add.text(600, 400, 'Start', { 
            fontSize: '32px', 
            fill: 'black',
            fontFamily:'"Press Start 2P"' 
        }).setOrigin(0.5);

        startButton.setInteractive();
        startButton.on('pointerdown', () => {
            this.scene.start('characters-screen');
        });
    }
}
