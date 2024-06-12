import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// register user 
export const registerUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).send({
                message: "Please fill all fields",
                success: false
            })
        }
        // check existing user 
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(401).send({
                message: "User Already exists",
                success: false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new userModel({ username, email, password: hashedPassword })
        await newUser.save()
        return res.status(201).send({
            message: "New User Created",
            success: true,
            newUser
        })
    } catch (error) {

        return res.status(500).send({
            message: "Error in register",
            success: false,
            error
        })
    }
}

// get all user 
export const getAllUser = async (req, res, next) => {
    try {
        const users = await userModel.find({})
        return res.status(200).send({
            message: "all users",
            success: true,
            users
        })

    } catch (error) {

        return res.status(500).send({
            message: "Error in get all user",
            success: false,
            error
        })
    }
}

// login user 
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                message: "Please fill all fields",
                success: false
            })
        }
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(200).send({
                message: "email nor registered",
                success: false
            })
        }
        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            return res.status(401).send({
                message: "invalid credential",
                success: false
            })
        }
        const tokenData = {
            id: user._id
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_TIME })
        return res.status(200).send({
            message: "login success",
            success: true,
            token,
            user
        })
    } catch (error) {

        return res.status(500).send({
            message: "Error in get login",
            success: false,
            error
        })
    }
}