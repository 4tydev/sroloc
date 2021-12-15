const { AUTO, Game, Scale } = require("phaser");
localStorage.setItem("score", 0);

const MainScene = require("./classes/MainScene");
const HomeScene = require("./classes/HomeScene");

const config = {
  type: AUTO,
  width: 800,
  height: 600,
  parent: "mainCanvas",
  autoCenter: Scale.CENTER_BOTH,
  dom: {
    createContainer: true
  },
  scene: [HomeScene, MainScene],
};

const game = new Game(config);
