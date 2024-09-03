import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUrl = process.env.DB_URL;

const connectDB = () => {
    //mongoose.connect("mongodb://localhost:27017/study-platform");
    mongoose.connect(dbUrl);

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log("Database connected");
    });
};

export default connectDB;
