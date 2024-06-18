import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// files
import connectdb from "./config/connectdb.js";

import dotenv from "dotenv";
dotenv.config()

const app = express()

// middleware
app.use(cors())
const port = process.env.port
const DATABASE_URL = process.env.MONGOOSE_URL


// route
app.get("/", (req, res) => {
    res.send("Hello")
})

// database
connectdb(DATABASE_URL)

// server
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`)
})