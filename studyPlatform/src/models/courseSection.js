import mongoose, { Schema } from "mongoose";


const CourseSectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
        required: true
    },
    sectionContent: [
        {
            type: Schema.Types.ObjectId,
            ref: "LectureContent",
            required: false
        }
    ],
});

const CourseSection = mongoose.model('CourseSection', CourseSectionSchema);
export default CourseSection;