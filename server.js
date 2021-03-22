const express = require ("express");
const logger = require ("morgan");
const mongoose = require ("mongoose");

const app = express();

const PORT = 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require("./"));
app.use(require("./"));

app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`);
});