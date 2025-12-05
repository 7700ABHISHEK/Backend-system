import express from "express";
import connectDB from "./config/ds.js";
import upload from "./middleware/multer.js";
import StudentModel from "./models/student.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8000;

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static("uploads"))
app.use("/uploads", express.static("uploads"))

connectDB();

app.get('/', async (req, res) => {
    try {
        const students = await StudentModel.find({});
        return res.render("index", { students })
    } catch (error) {
        console.log(error);
    }
})

app.post("/add-student", upload.single("photo"), async (req, res) => {

    try {
        if (req.file.mimetype.includes("image")) {
            const path = req.file.path;
            const data = req.body;

            const std = {
                ...data, photo: path
            }

            const newStd = new StudentModel(std);
            await newStd.save();

            res.redirect("/");

        } else {
            return res.send("Only Image Required...");
        }
    } catch (error) {
        console.log(error);
    }
})

app.get("/delete-student/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const student = await StudentModel.findById(id);
        const imagePath = path.join(__dirname, student.photo);
        console.log(imagePath);

        fs.unlink(imagePath, (err) => {
            if (err) {
                console.log(err);
            }
        })

        await StudentModel.findByIdAndDelete(id);

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }

})

app.get('/update-student/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const student = await StudentModel.findById(id);
        return res.render("edit", { student })
    } catch (error) {
        console.log(error);
    }


})

app.post('/update-student/:id', upload.single('file'), async (req, res) => {
    try {
        const { id } = req.params;
        const student = await StudentModel.findById(id);
        const updatedData = req.body;

        if (req.file) {
            const oldImagePath = path.join(__dirname, student.photo);

            fs.unlink(oldImagePath, (err) => {

                if (err) {
                    console.log(err);
                }
            });
            const newImagePath = req.file.path;
            updatedData.photo = newImagePath;

        }
        await StudentModel.findByIdAndUpdate(id, updatedData);
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }

});

app.listen(PORT, () => {
    console.log(`Server is running : http://localhost:${PORT}`);
})