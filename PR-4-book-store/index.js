import express from "express";
import connectDB from "./config/db.js";

const app = express();
const PORT = 8000;

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

connectDB()

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
    res.render("index");
})