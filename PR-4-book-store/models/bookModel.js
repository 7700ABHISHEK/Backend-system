import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    discountEligible: {
        type: Boolean,
        default: false
    }
});

const BookModel = mongoose.model("BookModel", bookSchema);

export default BookModel;
