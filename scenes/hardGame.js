import Phaser from "phaser";
import WebFont from "webfontloader";
import tiles from './../assets/tiles.png'
import tilemap from '../assets/tilemap.json'
import finish from './../assets/finish.png'
import male from './../assets/male.png'
import female from './../assets/female.png'


export default class HardGame extends Phaser.Scene{

    constructor(){
        super('hard-screen');
    }

    init(data) {
        //get the selected car
        this.selectedCar= data.car; 
        console.log(this.selectedCar);
    }

    preload(){
        this.load.image('pinkcar', 'assets/pinkcar.png');
        this.load.image('yellowcar', 'assets/yellowcar.png');
        this.load.image('greencar', 'assets/greencar.png');
        this.load.image('male', male);
        this.load.image('female', female);
        this.load.image('finish',finish)
    }

    create(){
        console.log('in hard game',this.car);

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

        const positions = [
            { x: 100, y: 170 },
            { x: 200, y: 240 },
            { x: 300, y: 580 },
            { x: 400, y: 250 },
            { x: 500, y: 150 },
            { x: 600, y: 250 },
            { x: 650, y: 180 }
        ];

        this.characters = [];
        
        positions.forEach(pos => {

            const spriteKey = Math.random() < 0.5 ? 'male' : 'female';

            this.character = this.physics.add.staticSprite(pos.x, pos.y, spriteKey).setScale(0.06);
            this.character.body.setSize(this.character.displayWidth, this.character.displayHeight);  //physics body
            this.character.body.setOffset(
                (this.character.width - this.character.displayWidth) / 2,
                (this.character.height - this.character.displayHeight) / 2
            );
            this.characters.push(this.character);
            this.physics.add.collider(this.car, this.character, this.incrementPoints)
        });

        this.fuelTanks = this.physics.add.group();
        this.fuel=150;
        this.maxFuel = 150;

       this.fuelBar = this.add.graphics();
       this.drawFuelBar();

       

       this.finish = this.physics.add.staticSprite(780,405,'finish')
       .setScale(0.07);
       this.finish.body.setSize(this.finish.displayWidth, this.finish.displayHeight);
       this.finish.body.setOffset(
        (this.finish.width - this.finish.displayWidth) / 2,
        (this.finish.height - this.finish.displayHeight) / 2
        );

        this.pointCount=0;
        this.collectedPeople=false;

       this.points= this.add.text(900,300,`Points: ${this.pointCount}`);
       
       this.physics.add.collider(this.car, wallsLayer);
       this.physics.add.collider(this.car, this.finish, this.reachFinish);

       this.car.body.allowRotation = true

       this.cursors= this.input.keyboard.createCursorKeys()
    }

    update(){
        
        this.processPlayerInput();  
        
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

    incrementPoints=(car, character)=>{
        this.pointCount += 1;

        if (this.points) {
            this.points.setText(`Points: ${this.pointCount}`);
        }
    
        character.destroy();

        if (this.pointCount === 6) {
            this.collectedPeople = true;
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
        if (this.collectedPeople){
            this.scene.start('win-screen', {car: this.selectedCar, level: 'finished'}); 
        }return; 
    }

}