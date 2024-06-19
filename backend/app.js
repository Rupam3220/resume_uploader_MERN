import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

// files
import connectdb from "./config/connectdb.js";
import userRoute from "./routes/userRoute.js";
//import upload from "./middlewares/multerMiddleware.js";

const app = express()
const port = process.env.port
const DATABASE_URL = process.env.MONGOOSE_URL

// cors
app.use(cors())

// database
connectdb(DATABASE_URL)

// JSON parsing
app.use(express.json())

// middleware
//app.use(upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'resumeDoc', maxCount: 1 }]))

// route
app.use('/api/v2/users', userRoute)

// server
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`)
})