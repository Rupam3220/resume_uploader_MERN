import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
    },
    state: {
        type: String,
    },
    gender: {
        type: String,
    },
    location: {
        type: String,
    },
    profileImage: {
        type: String,
        required: true
    },
    resumeDoc: {
        type: String,
        required: true
    }
})

export const UserSchema = mongoose.model("UserProfile", userSchema)