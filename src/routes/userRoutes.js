import express from 'express'
import { getAllUser, loginUser, registerUser } from '../controllers/userController.js'

// router object 
const router = express.Router()

// get app user 
router.get('/all-users', getAllUser)

// register user 
router.post('/register', registerUser)

// login user 
router.post('/login', loginUser)

export default router;