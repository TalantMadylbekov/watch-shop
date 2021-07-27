import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./connectDB/connection.js"
import productsRoutes from "./routes/productsRouter.js"
import  { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js";

dotenv.config()
const server = express()
connectDB()

const PORT = process.env.PORT || 8080
server.use(express.json())
server.use('/api/v1/products', productsRoutes)
server.use('/api/v1/users', userRoutes)


if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(path.resolve(), '/frontend/build')))
}

server.use(notFound)
server.use(errorHandler)

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`)
})