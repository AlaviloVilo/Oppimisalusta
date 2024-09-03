import mongoose, { Schema } from "mongoose";


const NewsCardSchema = new mongoose.Schema({
    refCourse: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: false
    },
    newsTitle: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
});

const NewsCard = mongoose.model('NewsCard', NewsCardSchema);
export default NewsCard;