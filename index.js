const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.js");
});

app.listen(8080, () => {
  console.log("App rodando!");
});