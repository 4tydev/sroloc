const { Scene } = require("phaser");

module.exports = class HomeScene extends Scene {
  constructor() {
    super(
        {
            key: "home",
            active: true,
        }
    );
  }

  init() {
  }

  preload() {
    this.load.html("loginForm", "/assets/components/loginForm.html");
    this.load.image("srolocTitle", "/assets/SROLOC.svg")
    this.load.image("background_static", "/assets/StaticBackground.png");
  }

  create() {
    this.background = this.add.image(400,300,"background_static");
    this.srolocTitle = this.add.image(400,100, "srolocTitle");
    this.loginForm = this.add.dom(400,600).createFromCache("loginForm");
    this.loginForm.setPerspective(800);
  }

  update() {

  }
};
