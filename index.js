const express = require("express");
const app = express();

//Setting
app.set("view engine", "ejs");
app.use(express.static("public"));

//Rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/question", (req, res) => {
  res.render("question");
});

//Start server
app.listen(8080, () => {
  console.log("App rodando!");
});
