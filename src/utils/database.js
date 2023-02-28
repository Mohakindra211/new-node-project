const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("school_library", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
