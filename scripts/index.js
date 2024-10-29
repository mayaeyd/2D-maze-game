import Phaser, {Physics} from 'phaser'
import Game from '../scenes/game'
import Characters from '../scenes/characters'
import * as SceneKeys from '../utilities/sceneKeys'



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

game.scene.add(SceneKeys.Characters, Characters)
game.scene.add(SceneKeys.Game, Game)

game.scene.start(SceneKeys.Characters)