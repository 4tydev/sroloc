const {Scene, Input, AUTO, Game} = require("phaser");
const ShipTransport = require("./classes/ShipTransport");

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

localStorage.setItem("score", 0);
const MainScene = require("./classes/MainScene");

<<<<<<< HEAD
  var explosionAnimConfig = {
    key: "explosionAnimation",
    frames: this.anims.generateFrameNumbers("explosion", {
      start: 0,
      end: 7,
    }),
    frameRate: 20,
  };
  this.anims.create(bgAnimConfig);
  this.anims.create(explosionAnimConfig);

  this.spacebar = this.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.SPACE
  );

  this.bg = this.add.sprite(400, 300, "background");

  this.bg.play("backgroundAnimation");

  let between = 0;

  for (let i = 0; i < 4; i++) {
    this.div4Tiles.push({
      color: this.tileColors[i],
      sprite: this.add
        .sprite(between, 100, this.tileColors[i].toLowerCase() + "TileDiv4")
        .setOrigin(0, 0),
    });
    this.div4Tiles[i].sprite.setDepth(1);
    between += 200;
  }

  this.ships = this.add.group({
    classType: ShipTransport,
    maxSize: 1,
    runChildUpdate: true,
  });

  this.ship = this.add.sprite(
    400,
    500,
    this.mainColors[this.randNumShip].toLowerCase() + "SpaceShip"
  );
};

gameScene.update = function () {
  if (this.ship.x >= 750) {
    this.movementDirection *= -1;
  } else if (this.ship.x <= 50) {
    this.movementDirection *= -1;
  }

  this.ship.x += this.movementDirection;

  if (!this.newShip) {
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.newShip = this.ships.get();

      if (this.newShip) {
        this.newShip.move(this.ship.x, this.ship.y);
      }

      this.ship.destroy();
    }

    this.newShip = undefined;
  }
};

spacePressed = true;
=======
>>>>>>> main

const config = {
  type: AUTO,
  width: 800,
  height: 600,
  scene: [ MainScene ],
};

const game = new Game(config);
