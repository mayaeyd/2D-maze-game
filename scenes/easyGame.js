import Phaser from 'phaser'
import WebFontFile from './webFontFile'
import tiles from './../assets/tiles.png'
import tilemap from '../assets/tilemap.json'
import finish from './../assets/finish.png'


export default class EasyGame extends Phaser.Scene{

    constructor(){
        super('easy-screen')
    }

    init(data) {
        //get the selected car
        this.selectedCar= data.selectedCar; 
    }

    preload(){
        this.load.image('pinkcar', 'assets/pinkcar.png');
        this.load.image('yellowcar', 'assets/yellowcar.png');
        this.load.image('greencar', 'assets/greencar.png');
        this.load.image('finish',finish)
    }

    create(){

       const map = this.make.tilemap({key: 'maze'})
       const tileset = map.addTilesetImage('raceTileMap','tiles')

       map.createLayer('Ground', tileset)
       const wallsLayer = map.createLayer('Walls', tileset);

       wallsLayer.setCollisionByProperty({collides : true})


       this.car = this.physics.add.sprite(45,50,this.selectedCar)  
       .setScale(0.6);
       this.car.body.setSize(this.car.displayWidth, this.car.displayHeight);  //physics body
       this.car.body.setOffset(
        (this.car.width - this.car.displayWidth) / 2,
        (this.car.height - this.car.displayHeight) / 2
        );

       this.finish = this.physics.add.staticSprite(780,405,'finish')
       .setScale(0.07);
       this.finish.body.setSize(this.finish.displayWidth, this.finish.displayHeight);
       this.finish.body.setOffset(
        (this.finish.width - this.finish.displayWidth) / 2,
        (this.finish.height - this.finish.displayHeight) / 2
        );
       
       this.physics.add.collider(this.car, wallsLayer);
       this.physics.add.collider(this.car, this.finish, this.reachFinish);

       this.car.body.allowRotation = true

       this.cursors= this.input.keyboard.createCursorKeys()  // cursors UP DOWN LEFT RIGHT    
    }

    update(){
        
        this.processPlayerInput();   

    }

    processPlayerInput(){
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
    }

    reachFinish = ()=>{
        this.scene.start('win-screen', {car: this.selectedCar, level: 'moderate'});  
    }
}


