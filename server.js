const express = require("express");
const server = express();

function homePage(req, res) {
  return res.sendFile(__dirname + "/index.html");
}

server.use(express.static("public")).get("/", homePage).listen(3000);
