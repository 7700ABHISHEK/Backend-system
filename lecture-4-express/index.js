const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Hare Krsna");
})

app.get("/about", (req, res) => {
    console.log(req.query.age);
    res.send(`Hare Ram ${req.query.age}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})