require("dotenv").config();
const Sequelize = require("sequelize");
const BooksModel = require("./models/books.js");

// Creating connection to database
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PW,
  {
     host: process.env.DB_HOST,
     dialect: "mysql",
     pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
     },
     logging: false,
  }
);

// Creating table
const Books = BooksModel(sequelize, Sequelize);

sequelize.sync({ force: false /* true resets database*/ }).then(() => {
  console.log("Database & tables created!");
});

module.exports = {
    Books
 };