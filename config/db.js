import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT
const mongo_url = process.env.MONGO_URL
import mongoose from "mongoose";

const connectDB = async function () {
    try{
        await mongoose.connect(`${mongo_url}`)
        console.log('mongo db connected')
    }
    catch(error){
        console.error(error)
    }
}
export default connectDB