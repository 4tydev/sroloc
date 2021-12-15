const { Scene } = require("phaser");

module.exports = class HomeScene extends Scene {
  constructor() {
    super(
        {
            key: "HomeScene",
            active: true,
            
        }
    );
  }

  init() {
  }

  preload() {
    this.load.html("loginForm", "/assets/components/loginForm.html");
    this.load.html("menuButtons", "/assets/components/menuButtons.html");
    this.load.image("srolocTitle", "/assets/SROLOC.svg");
    this.load.image("background_static", "/assets/StaticBackground.png");
  }

  create() {
    this.background = this.add.image(400,300,"background_static");
    this.srolocTitle = this.add.image(400,100, "srolocTitle");
    this.menuButtons = this.add.dom(400,300).createFromCache("menuButtons");

    this.menuButtons.addListener('click');
    var ref = this;
    this.menuButtons.on('click', function(e) {
      if(e.target.name == "playButton"){
        ref.scene.start("main");
      }
    }, this)

  }

  update() {

  }
};
