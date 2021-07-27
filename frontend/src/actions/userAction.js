import axios from "axios"
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT, USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS
} from "../constants/userConstants"

export const userLoginAction = (email, password) => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: USER_LOGIN_REQUEST})
            const {data: user} = await axios.post('/api/v1/users/login', {email, password})
            dispatch({type: USER_LOGIN_SUCCESS, payload: user})
            localStorage.setItem('userInfo', JSON.stringify(getState().userLogin.userInfo))
        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL, payload:
                error.response && error.response.data.message
                ? error.response.data.message: error.message
            })
        }
    }
}

export const logout = () => {
    localStorage.removeItem('userInfo')
    return {type: USER_LOGOUT}
}