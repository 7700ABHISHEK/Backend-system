import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    photo: {
        type: String,
        required: true
    }, 
})

const StudentModel = mongoose.model("StudentModel", studentSchema);

export default StudentModel;