const Phaser = require('phaser');

const gameScene = new Phaser.Scene();

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: gameScene
}

const game = new Phaser.Game(config); 