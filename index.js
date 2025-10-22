const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});



module.exports = app; // 
