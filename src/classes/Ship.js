const Phaser = require('phaser');

module.exports= class Ship extends Phaser.GameObjects.Image{
    constructor(scene){
        super(scene,0,0,'ship')
        this.setScale(0.25);
        this.speed = Phaser.Math.GetSpeed(500,1);
    }

    move(x,y){
        this.setPosition(x,y);

        this.setActive(true);
        this.setVisible(true);
    }

    update(time, delta){
        this.setScale(0.25);
        this.y -= this.speed * delta;

        if(this.y < 0){
            this.setActive(false);
            this.setVisible(false);
        }
    }
}