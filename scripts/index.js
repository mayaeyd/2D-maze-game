import Phaser, {Physics} from 'phaser'
import TitleScene from '../scenes/titleScene'
import Characters from '../scenes/characters'
import Preloader from '../scenes/preloader'
import EasyGame from '../scenes/easyGame'
import Win from '../scenes/winScene'
import ModerateGame from '../scenes/moderateGame'
import HardGame from '../scenes/hardGame'




const config={
    width: 1200,
    height: 576,
    type: Phaser.AUTO,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:0},
            debug:false
        }
    },
    scene: [TitleScene, Characters, Preloader, EasyGame, Win, ModerateGame, HardGame]
}

const game =new Phaser.Game(config)