export default function addGameContent(scene, car, finish){

    console.log(scene,car,finish);
    

    const map = scene.make.tilemap({key: 'maze'})
    const tileset = map.addTilesetImage('raceTileMap','tiles')

    map.createLayer('Ground', tileset)
    const wallsLayer = map.createLayer('Walls', tileset);

    wallsLayer.setCollisionByProperty({collides : true})

    car.body.setSize(car.displayWidth, car.displayHeight);  //physics body
    car.body.setOffset(
        (car.width - car.displayWidth) / 2,
        (car.height - car.displayHeight) / 2
        );

       finish = scene.physics.add.staticSprite(780,405,'finish')
       .setScale(0.07);
       finish.body.setSize(finish.displayWidth, finish.displayHeight);
       finish.body.setOffset(
        (finish.width - finish.displayWidth) / 2,
        (finish.height - finish.displayHeight) / 2
        );
       
       scene.physics.add.collider(car, wallsLayer);
}