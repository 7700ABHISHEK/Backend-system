import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/schoolData";

const connectDB = async () => {

    try {
        mongoose.connection.on("connected", () => {
            console.log("Database Connected Successfully...");
        })

        await mongoose.connect(MONGO_URL);
    } catch (error) {
        console.log(errro);
    }
}

export default connectDB;