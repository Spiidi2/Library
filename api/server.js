require("dotenv").config();
const express = require('express');
const path = require('path');
const {Model} = require("sequelize");
const app = express();
const {Books} = require('./sequelize');
bodyParser = require("body-parser");
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.get("/api/allbooks", (req, res) => {
    Books
        .findAll()
        .then((allBooks) => {
            console.log(">>> Fetch all books successful.");
            res.json(allBooks);
        })
        .catch((error) => {
            console.log(">>> Couldn't fetch books data.");
            console.log("> Error: " + error);
        });
});

app.post("/api/addbook", (req, res, next) => {
    Books
        .create(req.body)
        .then((books) => {
            console.log(">>> Book submitted successfully.");
            console.log("> Response: " + JSON.stringify(books));
            res.json(books);
        })
        .catch((error) => {
            console.log(">>> Couldn't submit the book.");
            console.log("> Error: " + error);
            res
                .status(400)
                .end();
        });
});

app.get("/api/book/:id", (req, res) => {
    const bookId = req.params.id;
    Books
        .findOne({
        where: {
            id: bookId
        }
    })
        .then((books) => {
            console.log(bookId);
            res.json(books);
        })
        .catch((error) => {
            res
                .status(400)
                .end();
        });
});

app.put("/api/editbook/:id", (req, res) => {
    const bookId = req.params.id;

    Books
        .findByPk(bookId)
        .then((books) => {
            return books.update(req.body);
        })
        .then((updatedBook) => {
            res.json(updatedBook);
        })
        .catch((error) => {
            res
                .status(400)
                .end();
        });
});

app.delete('/api/delete/:id', (req, res) => {
    const bookId = req.params.id;
    Books
        .destroy({
            where: {
                id: bookId
            }
        })
        .then(function (rowDeleted) { // rowDeleted will return number of rows deleted
            if (rowDeleted === 1) {
                console.log('Deleted successfully');
            }
        }, function (err) {
            console.log(err);
        });
})
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
