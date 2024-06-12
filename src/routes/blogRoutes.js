import express from 'express'
import { blogDetail, createBlog, deleteBlog, getAllBlog, updateBlog } from '../controllers/blogController.js'

// router object 
const router = express.Router()

// get allblog
router.get('/all-blog', getAllBlog)

// createBlog
router.post('/create-blog', createBlog)

// updateBlog
router.put('/update-blog/:id', updateBlog)

// delete blog
router.delete('/delete-blog/:id', deleteBlog)

// get blog detail
router.get('/blog-detail/:id', blogDetail)


export default router;