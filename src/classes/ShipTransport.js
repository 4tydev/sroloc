const Phaser = require("phaser");

const colors = ["Blue", "Green", "Red", "Yellow"];

module.exports = class ShipTransport extends Phaser.GameObjects.Image {
  constructor(scene) {
    super(scene, 0, 0, colors[1].toLowerCase() + "SpaceShip");
    this.speed = Phaser.Math.GetSpeed(500, 1);
  }

  move(x, y) {
    this.setPosition(x, y);

    this.setActive(true);
    this.setVisible(true);
  }

  update(time, delta) {
    this.y -= this.speed * delta;

    if (this.y < 0) {
      this.setActive(false);
      this.setVisible(false);
      this.scene.scene.restart();
    }
  }
};
