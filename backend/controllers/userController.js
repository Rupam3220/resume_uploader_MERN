import { UserSchema } from "../models/userSchema.js";

class userController {

    // Add profile to db
    static saveUser = async(req, res) => {
        try {
            const {name, email, dob, state, gender, location} = req.body
            const profileImage = req.files['profileImage'][0].filename
            const resumeDoc = req.files['resumeDoc'][0].filename

            if (name && email && dob && state && gender && location && profileImage && resumeDoc) {
                const doc = new UserSchema ({
                    name:name,
                    email:email,
                    dob:dob,
                    state:state,
                    gender:gender,
                    location:location,
                    profileImage:profileImage,
                    resumeDoc:resumeDoc
                })
                const user = await doc.save()
                res.status(201).send({ "status": "success", "message": "Profile uploaded Successfully...", "user": user })
            } else {
                res.status(200).send({ "status": "failed", "message": "All fields are required!" })
            }
        } catch (error) {
            console.log("Failed to upload profile!",error)   
        }
    }

    // retrieve profiles from db
    static retrieveUser = async(req, res) => {
        try {
            const user = await UserSchema.find()
            res.status(200).send({ "status": "success", "message": "Profile retrieve Successfully...", "user": user })
        } catch (error) {
            console.log("Error while retrive user!", error)
        }
    }
}

export default userController