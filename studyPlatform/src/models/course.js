import mongoose, { Schema } from "mongoose";

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseKey: {
        type: String,
        required: true,
    },    
    courseIdentifier: {
        type: String,
        required: true,
        unique: true
    },
    coursePic: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    learningGoals: {
        type: String,
        required: false
    },
    courseContent: [
        {
            type: Schema.Types.ObjectId,
            ref: "CourseSection"
        }
    ],
    courseStudents: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    author: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]

});

const Course = mongoose.model('Course', CourseSchema);
export default Course;