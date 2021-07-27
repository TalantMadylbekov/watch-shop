export const productsListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case "PRODUCTS_REQUEST":
            return {...state, isLoading: true }
        case "PRODUCTS_SUCCESS":
            return {isLoading: false, products: action.payload }
        case "PRODUCTS_FAILED":
            return {isLoading: false, error: action.error}
        default:
            return state
    }
}
export const productDetailsReducer = (state = {product: {}}, action) => {
    switch (action.type) {
        case "PRODUCT_DETAILS_REQUEST":
            return {...state, isLoading: true }
        case "PRODUCT_DETAILS_SUCCESS":
            return {isLoading: false, product: action.payload }
        case "PRODUCT_DETAILS_FAILED":
            return {isLoading: false, error: action.error}
        default:
            return state
    }
}