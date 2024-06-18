import mongoose from "mongoose";

// Name
// Email
// DOB
// State<
// Gender
// Location
// Avatar


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: Date,
    },
    dob: {
        type: String,
        required: true,
        trim: true
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