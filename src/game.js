const { FOREVER } = require("phaser");
const Phaser = require("phaser");
const ShipTransport = require("./classes/ShipTransport");

const gameScene = new Phaser.Scene();

const colors = ["Blue", "Green", "Red", "Yellow"];

console.log(colors);
gameScene.init = function () {
  this.movementDirection = 1;
  this.div4Tiles = [];
};

gameScene.preload = function () {
  this.load.spritesheet("background", "assets/AnimatedBackground.png", {
    frameWidth: 800,
    frameHeight: 600,
    endFrame: 72,
  });

  for (let i = 0; i < 4; i++) {
    this.load.image(
      colors[i].toLowerCase() + "TileDiv4",
      "assets/tiles/Div4/" + colors[i] + "TileDiv4.png"
    );
  }

  for (let i = 0; i < 4; i++) {
    this.load.image(
      colors[i].toLowerCase() + "SpaceShip",
      "assets/sprites/" + colors[i] + "SpaceShip.png"
    );
  }
};

gameScene.create = function () {
  var animConfig = {
    key: "backgroundAnimation",
    frames: this.anims.generateFrameNumbers("background", {
      start: 0,
      end: 72,
    }),
    frameRate: 20,
    repeat: Infinity,
  };
  this.anims.create(animConfig);

  this.spacebar = this.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.SPACE
  );

  this.bg = this.add.sprite(400, 300, "background");

  this.bg.play("backgroundAnimation");

  let between = 0;

  for (let i = 0; i < 4; i++) {
    this.div4Tiles.push(
      this.add
        .sprite(between, 100, colors[i].toLowerCase() + "TileDiv4")
        .setOrigin(0, 0)
    );
    this.div4Tiles[i].setDepth(1);
    between += 200;
  }

  this.ships = this.add.group({
    classType: ShipTransport,
    maxSize: 1,
    runChildUpdate: true,
  });

  this.ship = this.add.sprite(400, 500, colors[1].toLowerCase() + "SpaceShip");
};

gameScene.update = function () {
  if (this.ship.x === 700) {
    this.movementDirection *= -1;
  } else if (this.ship.x === 100) {
    this.movementDirection *= -1;
  }

  this.ship.x += this.movementDirection;
  if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
    var newShip = this.ships.get();

    if (newShip) {
      newShip.move(this.ship.x, this.ship.y);
    }

    this.ship.destroy();
  }
};

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: gameScene,
};

const game = new Phaser.Game(config);
