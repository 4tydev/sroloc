const { AUTO, Game } = require("phaser");
localStorage.setItem("score", 0);

const MainScene = require("./classes/MainScene");
const HomeScene = require("./classes/HomeScene");

const config = {
  type: AUTO,
  width: 800,
  height: 600,
  scene: [HomeScene, MainScene],
};

const game = new Game(config);
