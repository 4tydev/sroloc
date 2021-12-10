const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
const DIST_DIR = path.join(__dirname, "/client/dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ entended: false }));

app.use("/dist", express.static(DIST_DIR));
app.use("/assets", express.static(path.join(__dirname, "/client/assets")));

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get("/login", (req, res) => {
  
})
app.listen(PORT, () => {
  console.log("Game Server Started at http://localhost:5000");
});
