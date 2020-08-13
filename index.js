const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = false;
  var produtos = [
    { nome: "Doritos", preco: 3.14 },
    { nome: "Coca-cola", preco: 3.5 },
    { nome: "Água", preco: 1.0 },
    { nome: "RedBull", preco: 6.0 },
    { nome: "Pipoca", preco: 1.5 },
    { nome: "Nescal", preco: 4.0 },
  ];
  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "youtube",
    inscritos: 100,
    msg: exibirMsg,
    produtos: produtos,
  });
});

app.listen(8080, () => {
  console.log("App rodando!");
});
