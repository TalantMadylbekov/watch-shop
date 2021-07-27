import {combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productsListReducer, productDetailsReducer} from "../reducers/productsReducer.js";
import {cartReducer} from "../reducers/cartReducer.js";
import {userLoginReducer, userRegisterReducer} from "../reducers/userReducer.js"

const reducer = combineReducers({
    productsList: productsListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})

const cartFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = {cart: {cartItems: cartFromStorage}, userLogin: {userInfo: userFromStorage}}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store