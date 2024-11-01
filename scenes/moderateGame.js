import Phaser from "phaser";
import WebFont from "webfontloader";
import tiles from './../assets/tiles.png'
import tilemap from '../assets/tilemap.json'
import finish from './../assets/finish.png'

export default class ModerateGame extends Phaser.Scene{

    constructor(){
        super('moderate-screen');
    }

    init(data) {
        //get the selected car
        this.selectedCar= data.car; 
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

       this.fuelTanks = this.physics.add.group();

       this.cursors= this.input.keyboard.createCursorKeys();

       this.fuel=100;
       this.maxFuel = 100;

       this.fuelBar = this.add.graphics();
       this.drawFuelBar();
    }

    update(){
        
        this.processPlayerInput(); 
        if (this.car.body.velocity.x !== 0 || this.car.body.velocity.y !== 0) {
            this.fuel -= 0.1; 
            if (this.fuel < 0) this.fuel = 0; 
            this.drawFuelBar(); 
        }
        
        if (this.fuel === 0) {
            this.car.body.setVelocity(0);
            this.scene.start('lose-screen');
        }
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

    drawFuelBar() {
        this.fuelBar.clear();
        this.fuelBar.fillStyle(0x00ff00, 1); // green color for fuel
        const barWidth = 200;
        const barHeight = 20;
        const fuelPercentage = Phaser.Math.Clamp(this.fuel / this.maxFuel, 0, 1);
        this.fuelBar.fillRect(900, 20, barWidth * fuelPercentage, barHeight);
        this.fuelBar.lineStyle(2, 0xffffff, 1); // white border
        this.fuelBar.strokeRect(900, 20, barWidth, barHeight);
    }

    reachFinish = ()=>{
        this.scene.start('win-screen', {car: this.selectedCar, level: 'hard'});  
    }

}