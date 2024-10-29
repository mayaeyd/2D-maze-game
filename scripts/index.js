import Phaser, {Physics} from 'phaser'
import Game from '../scenes/game'


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

const game =new Phaser.Game(config) //scene :screen page

game.scene.add('game-screen', Game)
game.scene.start('game-screen')