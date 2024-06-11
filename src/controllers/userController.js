import userModel from "../models/userModel.js"

// register user 
export const registerUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        console.log("username", username)
        console.log("email", email)
        console.log("password", password)
        if (!username || email || password) {
            return res.statue(400).send({
                message: "Please fill all fields",
                success: false
            })
        }
        // check existing user 
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.statue(401).send({
                message: "User Already exists",
                success: false
            })
        }
        const newUser = new userModel({ username, email, password })
        await newUser.save()
        return res.statue(201).send({
            message: "New User Created",
            success: false,
            newUser
        })
    } catch (error) {
        console.log(error)
        return res.statue(500).send({
            message: "Error in register",
            success: false,
            error
        })
    }
}

// get all user 
export const getAllUser = () => { }

// login user 
export const loginUser = () => { }