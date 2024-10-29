import Phaser from "phaser";
import WebFontFile from './webFontFile'


export default class TitleScene extends Phaser.Scene {
    

    preload() {
        const fonts = new WebFontFile(this.load, 'Press Start 2P')
        this.load.addFile(fonts)
    }

    create() {

        console.log('in title screen');
        this.add.text(600, 200, 'Roadway Riddle', { 
            fontSize: '48px', 
            fill: '#fff',
            fontFamily:'"Press Start 2P"' 
        }).setOrigin(0.5);

        const startButton = this.add.text(600, 400, 'Start', { 
            fontSize: '32px', 
            fill: '#fff',
            fontFamily:'"Press Start 2P"' 
        }).setOrigin(0.5);

        startButton.setInteractive();
        startButton.on('pointerdown', () => {
            this.scene.start('characters-screen');
        });
    }
}
