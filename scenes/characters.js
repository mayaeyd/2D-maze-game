import Phaser from 'phaser'
import WebFontFile from './webFontFile'
import {Game} from '../utilities/sceneKeys'

export default class Characters extends Phaser.Scene{

    preload(){
        const fonts = new WebFontFile(this.load, 'Press Start 2P')
        this.load.addFile(fonts)
    }

    //1200x600

    create(){
        
        

    }

    update(){
        
    }
}
