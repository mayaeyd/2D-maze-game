import Phaser from 'phaser'
import WebFontFile from './webFontFile'
import tiles from './../assets/tiles.png'
import tilemap from './../assets/tilemap.json'


export default class Game extends Phaser.Scene{

    constructor(){
        super('game-screen')
    }

    init(data) {
        //get the selected car
        this.car= data.selectedCar; 
    }

    preload(){
        this.load.image('tiles', tiles);
        this.load.tilemapTiledJSON('maze',tilemap);
        this.load.image('pinkcar', 'assets/pinkcar.png');
        this.load.image('yellowcar', 'assets/yellowcar.png');
        this.load.image('greencar', 'assets/greencar.png');
    }

    create(){

       console.log('in game',this.car);

       //this.physics.add.existing(this.car, true)
       this.car = this.physics.add.sprite(50,50,this.car)
       this.car.setCollideWorldBounds(true,1,1)

       this.cursors= this.input.keyboard.createCursorKeys()  // cursors UP DOWN LEFT RIGHT    
    }

    update(){

        /**@type {Phaser.Physics.Arcade.StaticBody} */
        const carBody=this.car.body

        if(this.cursors.up.isDown){
            this.car.y -=5
            carBody.updateFromGameObject() 
            this.car.rotation= Phaser.Math.DegToRad(180) 
        }
        else if(this.cursors.down.isDown){
            this.car.y +=5
            carBody.updateFromGameObject()
            this.car.rotation= Phaser.Math.DegToRad(0)
        }
        else if(this.cursors.left.isDown){
            this.car.x -=5
            carBody.updateFromGameObject()
            this.car.rotation= Phaser.Math.DegToRad(90)
        }
        else if(this.cursors.right.isDown){
            this.car.x +=5
            carBody.updateFromGameObject()
            this.car.rotation= Phaser.Math.DegToRad(-90)
        }

        

        // Optional: Adjust angle if you want to rotate the car when it moves
        if (this.car.body.velocity.x !== 0 || this.car.body.velocity.y !== 0) {
            this.car.rotation = Phaser.Math.Angle.Between(0, 0, this.car.body.velocity.x, this.car.body.velocity.y);
        }

    }

}
