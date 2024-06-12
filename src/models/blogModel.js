import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    slug: {
        type: String,
        unique: [true, "slug is taken"],
        required: [true, "slug is required"]
    },
    content: {
        type: String,
        required: [true, "content is required"],
    },
    image: {
        type: String,
        required: [true, "image is required"]
    },
}, { timestamps: true })

const blogModel = mongoose.model('Blog', blogSchema)

export default blogModel