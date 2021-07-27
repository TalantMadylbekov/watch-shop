import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

const url = process.env.MONGO_URL

const connectDB = async () => {
    try {
        const newConnect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
   console.log("db is connected".bgCyan)
    } catch (error) {
        console.log("Ощибка подключения к базе")
    }
}
export default connectDB