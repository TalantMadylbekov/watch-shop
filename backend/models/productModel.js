import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true}
})
const productSchema = mongoose.Schema({
        user: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        image: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
            default: 0
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        counterInStock: {
            type: Number,
            required: true,
            default: 0
        },
        reviews: [reviewSchema]
    }, {timestamps: true})

const Product = mongoose.model('products', productSchema)

export default Product