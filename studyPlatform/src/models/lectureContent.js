import mongoose, { Schema } from "mongoose";

// Schema for individual view
const viewSchema = new Schema({
    timestamp: {
      type: Date,
      default: Date.now
    }
  });

const ContentSchema = new Schema({
    url: String,
    filename: String,
    title: String,
    description: String,
    views: [viewSchema]  // Embedding the viewSchema
});


const LectureContentSchema = new mongoose.Schema({
    lectureName: {
        type: String,
        required: true
    },
    lectureMaterial: {
        content: [ContentSchema],
        required: true
    },
    numOfLikes: {
        type: Number,
        required: true
    },
    numOfComments: {
        type: Number,
        required: true
    },
    numOfViews: {
        type: Number,
        required: true
    },
});

const LectureContent = mongoose.model('LectureContent', LectureContentSchema);
export default LectureContent;