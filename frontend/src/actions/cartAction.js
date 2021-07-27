import axios from 'axios'
import {ADD_TO_CART, REMOVE_FROM_CART} from "../constants/cartConstants.js"

export const addToCart = (id, qt) => {
    return async (dispatch, getState) => {
        const {data} = await axios.get(`/api/v1/products/${id}`)
        dispatch({
            type: ADD_TO_CART,
            payload: {
                product:data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                counterInStock: data.counterInStock,
                qt
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    }
}
export const removeFromCart = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: REMOVE_FROM_CART,
            id
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    }
}