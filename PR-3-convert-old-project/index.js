const express = require("express");
const app = express();

const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    return res.render("index")
})

app.get("/checkout", (req, res) => {
    return res.render("check-out")
})

app.get("/success", (req, res) => {
    return res.render("success-page")
})


app.listen(PORT, (error) => {
    if (error) {
        console.log("something went wrong");
        return;
    }
    console.log(`Server is running on http://localhost:${PORT}`);
})