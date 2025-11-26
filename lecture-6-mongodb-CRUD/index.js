import express from "express";
import connectDB from "./config/db.js";
import Student from "./models/StudentModel.js";

const app = express();
const PORT = 8000;

connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/add-student", async (req, res) => {
    console.log(req.body);
    const data = req.body;
    const newStudent = new Student(data);
    await newStudent.save();
})


app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("server is running");
    console.log(`http://localhost:${PORT}`);
})