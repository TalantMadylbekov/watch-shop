import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    {timestamps: true})

userSchema.pre('save', async function (next) {
  this.password = bcrypt.hashSync(this.password, 10)
    next()
})

userSchema.methods.matchPassword = (async function (password) {
    return bcrypt.compare(password, this.password)
})
const User = mongoose.model('users', userSchema)

export default User