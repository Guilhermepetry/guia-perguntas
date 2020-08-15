const { Sequelize } = require("sequelize");

const connection = new Sequelize("guia_perguntas", "root", "root", {
  host: "localhost",
  dialect: "mariadb",
});

module.exports = connection;
