const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;
const DIST_DIR = path.join(__dirname, '/dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use("/dist", express.static(DIST_DIR));
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log("Game Server Started at http://localhost:8080");
});
