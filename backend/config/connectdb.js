import mongoose from "mongoose";

const connectdb = async(MONGOOSE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName : 'resumeupload'
        }
        await mongoose.connect(MONGOOSE_URL, DB_OPTIONS)
        console.log("Database connected successfully...")
    } catch (error) {
        console.log("Database connection error!", error)
    }
}

export default connectdb