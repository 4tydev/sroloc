const Phaser = require("phaser");

module.exports = class ShipTransport extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(
      scene,
      0,
      0,
      scene.mainColors[scene.randNumShip].toLowerCase() + "SpaceShip"
    );
    this.speed = Phaser.Math.GetSpeed(500, 1);
    this.color = scene.mainColors[scene.randNumShip];
  }

  move(x, y) {
    this.setPosition(x, y);

    this.setActive(true);
    this.setVisible(true);
  }

  update(time, delta) {
    this.y -= this.speed * delta;

    let shipRect = this.getBounds();
    //HIT TILE IS UNDEFINED HERE;
    let hitTile;

    if (!hitTile) {
      for (let i = 0; i < 4; i++) {
        if (
          Phaser.Geom.Intersects.RectangleToRectangle(
            this.scene.div4Tiles[i].sprite.getBounds(),
            shipRect
          )
        ) {
          hitTile = this.scene.div4Tiles[i];
          break;
        }
      }

      if (hitTile) {
        if (hitTile.color !== this.color) {
          console.log("Hit wrong color");
          let explosion = this.scene.add.sprite(this.x, this.y, "explosion");
          let sceneRef = this.scene.scene;
          this.destroy();
          explosion.play("explosionAnimation");
          explosion.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            sceneRef.restart();
          })
        }
      }
    }

    if (this.y < 0) {
      this.setActive(false);
      this.setVisible(false);
      this.scene.scene.restart();
    }
  }
};
