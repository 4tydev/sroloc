const {Scene, Input, AUTO, Game} = require("phaser");
const ShipTransport = require("./classes/ShipTransport");

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

localStorage.setItem("score", 0);
const MainScene = require("./classes/MainScene");


const config = {
  type: AUTO,
  width: 800,
  height: 600,
  scene: [ MainScene ],
};

const game = new Game(config);
