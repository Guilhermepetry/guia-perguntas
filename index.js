const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connection = require("./database/database");
const questionModel = require("./database/Question");
const answerModel = require("./database/Answer");

// DataBase

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com banco de dados!");
  })
  .catch((erro) => {
    console.log(erro);
  });

//Setting
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
  questionModel
    .findAll({ raw: true, order: [["id", "DESC"]] })
    .then((question) => {
      res.render("index", {
        question: question,
      });
    });
});

app.get("/question", (req, res) => {
  res.render("question");
});

app.post("/savequestion", (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  questionModel
    .create({
      title: title,
      description: description,
    })
    .then(() => {
      res.redirect("/");
    });
});

app.get("/question/:id", (req, res) => {
  var id = req.params.id;
  questionModel
    .findOne({
      where: { id: id },
    })
    .then((question) => {
      if (question != undefined) {
        answerModel
          .findAll({
            where: { questionId: question.id },
            order: [["id", "DESC"]],
          })
          .then((answer) => {
            res.render("answer", {
              question: question,
              answer: answer,
            });
          });
      } else {
        res.redirect("/");
      }
    });
});

app.post("/answer", (req, res) => {
  var body = req.body.body;
  var answerId = req.body.question;
  answerModel
    .create({
      body: body,
      questionId: answerId,
    })
    .then(() => {
      res.redirect("/question/" + answerId);
    });
});

//Start server
app.listen(3000, () => {
  console.log("App rodando!");
});
