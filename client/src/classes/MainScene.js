const {Scene, Input} = require("phaser");
const spawningTilePositions = require("../spawning-tile-positions.json");

const ShipTransport = require("./ShipTransport");

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = class MainScene extends Scene{
    constructor(){
        super(
            {
                key:"main",
                active: false,
            }
        );
    }

    init(){
        let styleSheet = document.getElementsByTagName("style")[0].sheet;
        styleSheet.insertRule(
            '@font-face{ font-family: "pixel"; src: url("/assets/PressStart2P.ttf"); format("truetype");'
        );
        this.movementStartDirection = getRandom(0, 2);
        this.movementDirection;

        let score = parseInt(localStorage.getItem("score"));

        if (this.movementStartDirection === 0) {
            this.movementDirection = 3 + (0.000001 + Math.sqrt(score));
        } else {
            this.movementDirection = -3 + (-0.000001 - Math.sqrt(score));
        }

        console.log(
            `Score: ${localStorage.getItem("score")}: ${this.movementDirection}`
        );

        this.div4Tiles = [];
        this.randNumTiles = getRandom(0, 24);
        this.randNumShip = getRandom(0, 4);
        this.tileColors = spawningTilePositions.Div4[this.randNumTiles];
        this.mainColors = ["Blue", "Green", "Red", "Yellow"];
        this.newShip;
        this.tileRects = [];
    }

    preload(){
        this.load.script(
            "webfont",
            "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          );
        this.load.spritesheet("background", "assets/AnimatedBackground.png", {
        frameWidth: 800,
        frameHeight: 600,
        endFrame: 72,
        });
    
        this.load.spritesheet("explosion", "assets/Explosion.png", {
        frameWidth: 48,
        frameHeight: 48,
        endFrame: 7,
        });
    
        for (let i = 0; i < 4; i++) {
        this.load.image(
            this.tileColors[i].toLowerCase() + "TileDiv4",
            "assets/tiles/Div4/" + this.tileColors[i] + "TileDiv4.png"
        );
        }
    
        for (let i = 0; i < 4; i++) {
        this.load.image(
            this.mainColors[i].toLowerCase() + "SpaceShip",
            "assets/sprites/" + this.mainColors[i] + "SpaceShip.png"
        );
        }
    }

    create(){
        this.scoreText;
        let sceneRef = this;

        WebFont.load({
            custom: {
            families: ["pixel"],
            },
            active: function () {
            sceneRef.scoreText = sceneRef.add.text(
                10,
                10,
                "Score: " + localStorage.getItem("score"),
                { fontFamily: "pixel" }
            );
            },
        });

        var bgAnimConfig = {
            key: "backgroundAnimation",
            frames: this.anims.generateFrameNumbers("background", {
            start: 0,
            end: 72,
            }),
            frameRate: 20,
            repeat: Infinity,
        };

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
            Input.Keyboard.KeyCodes.SPACE
        );

        this.touch
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
    }

    update(){
        if (this.ship.x >= 750) {
            this.movementDirection *= -1;
          } else if (this.ship.x <= 50) {
            this.movementDirection *= -1;
          }
        
          this.ship.x += this.movementDirection;
        
          if (!this.newShip) {
            if (Input.Keyboard.JustDown(this.spacebar)) {
              this.newShip = this.ships.get();
        
              if (this.newShip) {
                this.newShip.move(this.ship.x, this.ship.y);
              }
        
              this.ship.destroy();
            }
        
            this.newShip = undefined;
          }
    }
}