import dotenv from "dotenv"
dotenv.config()



import express from "express"
const app = express()

app.use(express.json())

import route from './routes/user.routes.js'

app.use('/user',route)



export default app