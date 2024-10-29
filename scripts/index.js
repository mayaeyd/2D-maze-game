import Phaser, {Physics} from 'phaser'
import Game from '../scenes/game'
import Characters from '../scenes/characters'
import TitleScene from '../scenes/titleScene'


const config={
    width: 1200,
    height: 600,
    type: Phaser.AUTO,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:0},
            debug:true
        }
    }
}

const game =new Phaser.Game(config)

game.scene.add('title-screen',TitleScene)
game.scene.add('characters-screen', Characters)
game.scene.add('game-screen', Game)

game.scene.start('title-screen')