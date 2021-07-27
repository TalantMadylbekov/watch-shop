import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from "express-async-handler";

const protect = asyncHandler(
    async (req, res, next) => {
        if (req.headers.authorization){
            try{
                const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRETKEY)
                req.user = await User.findById(decoded.id).select('--password')
                next()

            } catch (e) {
                res.status(401)
                throw new Error('No authorized. Invalid Token')
            }
        }
        if(!req.headers.authorization){
            res.status(401)
            throw new Error('No authorized. No token')
        }
    }
)
export {protect}
