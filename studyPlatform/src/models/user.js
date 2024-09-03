import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
        required: false
    },
    commenting: {
        type: Boolean,
        required: true
    },
    isTeacher: {
        type: Boolean,
        required: true
    },
    darkTheme: {
        type: Boolean,
        required: true
    },

});

const User = mongoose.model('User', UserSchema);
export default User;