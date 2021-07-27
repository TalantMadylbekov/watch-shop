import axios from "axios";

export const productsListAction = () => {
    return async (dispatch) => {
       try {
           dispatch({type: "PRODUCTS_REQUEST"})
           const {data: products} = await axios('/api/v1/products')
           dispatch({type: "PRODUCTS_SUCCESS", payload: products})
       }   catch (error) {
           dispatch({type: "PRODUCTS_FAILED", error})
       }
    }
}
export const productDetailsAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: "PRODUCT_DETAILS_REQUEST"})
            const {data: product} = await axios(`/api/v1/products/${id}`)
            dispatch({type: "PRODUCT_DETAILS_SUCCESS", payload: product})
        }   catch (error) {
            dispatch({type: "PRODUCT_DETAILS_FAILED", error})
        }
    }
}