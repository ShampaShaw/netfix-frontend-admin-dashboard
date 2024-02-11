import axios from 'axios'
import { loginFailure,loginStart,loginSuccess } from './AuthAction'
const server = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/api/'

export const login = async (userCredentials, dispatch) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(`${server}auth/login`, userCredentials)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}  // The loginCall function takes in userCredentials and dispatch as arguments and calls the dispatch function with an object containing a type property set to "LOGIN_START". The function then uses a try...catch block to make a POST request to the /auth/login endpoint with the userCredentials as the request body. If the request is successful, the function calls the dispatch function with an object containing a type property set to "LOGIN_SUCCESS" and a payload property set to the response data. If the request fails, the function calls the dispatch function with an object containing a type property set to "LOGIN_FAILURE" and a payload property set to the error.
