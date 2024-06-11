import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email is already in use"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
}, { timestamps: true })

const userModel = mongoose.model('User', userSchema)

export default userModel