import express from 'express'
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
dotenv.config()
//X7ylWrC9nQyvvGXx

const app = express()

const PORT = process.env.PORT

app.use('/api/auth',authRoutes)

app.listen(PORT, ()=> {
    console.log('Server is running on PORT:'+ PORT)
    connectDB()
})