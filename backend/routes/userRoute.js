import express from "express";
const router = express.Router()

// files import
import userController from "../controllers/userController.js";
import upload from "../middlewares/multerMiddleware.js";

// multer middleware
router.use('/resume', upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'resumeDoc', maxCount: 1 }]))


router.post("/resume", userController.saveUser)
router.get("/view-resume", userController.retrieveUser)

export default router