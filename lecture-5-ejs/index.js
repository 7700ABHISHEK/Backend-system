const express = require("express");
require("ejs");
const app = express();

app.set("view engine", "ejs");

const students = [
    {
        id: 1,
        name: "Neeraj",
        age: 20
    },
    {
        id: 2,
        name: "Abhishek",
        age: 21
    }
]

const PORT = 8000;
app.listen(PORT, (err) => {
    console.log("Server is running...");
    console.log(`http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
    res.render('index', {
        person: students
    })
})