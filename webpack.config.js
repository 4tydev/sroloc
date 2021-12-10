const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/src/game.js",
  output: {
    path: path.resolve(__dirname + "/client", "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [],
  },
};
