const Phaser = require('phaser');

const gameScene = new Phaser.Scene();


gameScene.preload = function (){
    this.load.image('stars','assets/stars.png');
    this.load.image('ship', 'assets/SpaceShipDemo.png');
}

gameScene.create = function (){
    this.stars = this.add.image(0, 0, 'stars').setOrigin(0,0);
    this.stars.setScale(0.50);
    
    this.ship = this.add.image(400,550,'ship');
    this.ship.setScale(0.25);
}

/*gameScene.update = function (){
    if(this.ship.x < 700){
        this.ship.x += 1;
    }
    else if(this.ship.x > 100){
        this.ship.x -= 1;
    }
}*/
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: gameScene
}

const game = new Phaser.Game(config); 