const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Setting
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/question", (req, res) => {
  res.render("question");
});

app.post("/savequestion", (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  res.send(
    "Formulário recebido com sucesso! " +
      "Título: " +
      title +
      ", " +
      "Descrição: " +
      description
  );
});

//Start server
app.listen(8080, () => {
  console.log("App rodando!");
});
