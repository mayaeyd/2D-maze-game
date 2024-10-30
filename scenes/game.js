import Phaser from 'phaser'
import WebFontFile from './webFontFile'
import tiles from './../assets/tiles.png'
import tilemap from '../assets/tilemap.json'


export default class Game extends Phaser.Scene{

    constructor(){
        super('game-screen')
    }

    init(data) {
        //get the selected car
        this.car= data.selectedCar; 
    }

    preload(){
        this.load.image('pinkcar', 'assets/pinkcar.png');
        this.load.image('yellowcar', 'assets/yellowcar.png');
        this.load.image('greencar', 'assets/greencar.png');
    }

    create(){

       console.log('in game',this.car);

       const map = this.make.tilemap({key: 'maze'})
       const tileset = map.addTilesetImage('raceTileMap','tiles')

       map.createLayer('Ground', tileset)

       
       const wallsLayer = map.createLayer('Walls', tileset);

       wallsLayer.setCollisionByProperty({collides : true})


       this.car = this.physics.add.sprite(45,50,this.car)
       .setScale(0.6);

       this.physics.add.collider(this.car, wallsLayer);

    //    const scaledWidth = this.car.width * 0.6;
    //     const scaledHeight = this.car.height * 0.6;
    //     this.car.body.setSize(scaledWidth, scaledHeight);

       //this.car.body.allowRotation = true;

       this.cursors= this.input.keyboard.createCursorKeys()  // cursors UP DOWN LEFT RIGHT    
    }

    update(){
        

        if (this.cursors.left.isDown) {
            this.car.setVelocityX(-200);
            this.car.setVelocityY(0);
            this.car.rotation= Phaser.Math.DegToRad(90);
        } 
        else if (this.cursors.right.isDown) {
            this.car.setVelocityX(200);
            this.car.setVelocityY(0);
            this.car.rotation= Phaser.Math.DegToRad(-90)
        } 
    
        else if (this.cursors.up.isDown) {
            this.car.setVelocityY(-200);
            this.car.setVelocityX(0);
            this.car.rotation= Phaser.Math.DegToRad(180)
        } 
        else if (this.cursors.down.isDown) {
            this.car.setVelocityY(200);
            this.car.setVelocityX(0);
            this.car.rotation= Phaser.Math.DegToRad(0)
        } 
        else {
            this.car.setVelocityX(0);
            this.car.setVelocityY(0);
        }   
        //this.processPlayerInput();    

    }

    processPlayerInput(){
        /**@type {Phaser.Physics.Arcade.StaticBody} */
        const carBody=this.car.body

        if(this.cursors.up.isDown){
            this.car.y -=3
            carBody.updateFromGameObject() 
            this.car.rotation= Phaser.Math.DegToRad(180)
        }
        else if(this.cursors.down.isDown){
            this.car.y +=3
            carBody.updateFromGameObject()
            this.car.rotation= Phaser.Math.DegToRad(0)
        }
        else if(this.cursors.left.isDown){
            this.car.x -=3
            carBody.updateFromGameObject()
            this.car.rotation= Phaser.Math.DegToRad(90) 
        }
        else if(this.cursors.right.isDown){
            this.car.x +=3
            carBody.updateFromGameObject()
            this.car.rotation= Phaser.Math.DegToRad(-90)
        }
    }

}
