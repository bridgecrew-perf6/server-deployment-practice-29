"use strict";

const express = require("express");

const app = express();

function start(port) {
  app.listen(port, () => {
    console.log(`you listen to port ${port}`);
  });
}

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/data", (req, res) => {
  res.status(200).json({
    name: "saad",
    email: "saad.alzoubi.1994@gmail.com",
  });
});

module.exports = {
  app: app,
  start: start,
};
