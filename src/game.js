const Phaser = require('phaser');

const gameScene = new Phaser.Scene();

gameScene.init = function (){
    this.movementDirection = 1;
}

gameScene.preload = function (){
    this.load.spritesheet('background', 'assets/AnimatedBackground.png', {frameWidth: 800, frameHeight:600, endFrame: 72 });
    this.load.image('ship', 'assets/SpaceShipDemo.png');
}

gameScene.create = function (){
    var animConfig = {
        key: 'backgroundAnimation',
        frames: this.anims.generateFrameNumbers('background', {start: 0, end: 72}),
        frameRate: 20,
        reapeat: Infinity
    }

    this.anims.create(animConfig);

    var Ship = new Phaser.Class({
        Extends: Phaser.GameObjects.Image,

        initialize:

        function Ship(scene){
            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'ship');
            
            this.speed = Phaser.Math.GetSpeed(500,1);
        },

        move: function(x,y){
            this.setPosition(x,y);

            this.setActive(true);
            this.setVisible(true);
        },

        update: function(time, delta){
            this.setScale(0.25);
            this.y -= this.speed * delta;

            if(this.y < 0){
                this.setActive(false);
                this.setVisible(false);
            }
        }
    });

    this.ships = this.add.group({
        classType: Ship,
        maxSize: 1,
        runChildUpdate: true
    });

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.bg = this.add.sprite(400,300,'background');
    
    this.bg.play('backgroundAnimation');
    
    this.ship = this.add.image(400,550,'ship');
    this.ship.setScale(0.25);
}

gameScene.update = function (){
    if(this.ship.x === 700){
        this.movementDirection *= -1;
    }
    else if(this.ship.x === 100){
        this.movementDirection *= -1;
    }

    this.ship.x += this.movementDirection;
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
        var newShip = this.ships.get();

        if(newShip){
            newShip.move(this.ship.x, this.ship.y);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: gameScene
}

const game = new Phaser.Game(config); 