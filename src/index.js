import express from "express";
import cors from "cors"
import morgan from "morgan";
import dotenv from 'dotenv'
import dbConfig  from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'

dotenv.config();
dbConfig();
const app = express();
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express())
app.use(morgan("dev"))
app.use(express.json())

// routes
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/blogs', blogRoutes)

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))


