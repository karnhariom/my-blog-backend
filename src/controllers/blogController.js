import blogModel from "../models/blogModel.js";

export const createBlog = async (req, res, next) => {
    try {
        const { title, image, content, slug } = req.body
        if (!title || !image || !content || !slug) {
            return res.status(400).send({
                message: "please provide all fields",
                success: false,
            })
        }
        const newBlog = new blogModel({
            title,
            image,
            content,
            slug
        })

        await newBlog.save()

        return res.status(200).send({
            message: "blog created successfully",
            success: true,
            newBlog
        })

    } catch (error) {
        return res.status(500).send({
            message: "Error in creating all blogs",
            success: false,
            error
        })
    }
}

export const getAllBlog = async (req, res, next) => {
    try {
        const blog = await blogModel.find({})
        if (!blog) {
            return res.status(200).send({
                message: "data not found",
                success: false
            })
        }
        return res.status(200).send({
            message: "all blogs",
            blogcount: blog.length,
            success: true,
            blog
        })

    } catch (error) {

        return res.status(500).send({
            message: "Error in getting all blogs",
            success: false,
            error
        })
    }
}

export const blogDetail = async (req, res, next) => { }

export const updateBlog = async (req, res, next) => { }

export const deleteBlog = async (req, res, next) => { }