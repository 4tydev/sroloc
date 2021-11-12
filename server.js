const express = require("express");
const path = require("path");
const app = express();

app.use("/dist", express.static(path.join(__dirname, "/dist")));
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(8080, () => {
  console.log("Game Server Started at http://localhost:8080");
});
