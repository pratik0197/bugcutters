import * as actionTypes from './actionTypes'
import axios from 'axios'
export const logout = ()=>{
    console.log('logout')
    return {
        type : actionTypes.AUTH_LOGOUT
    }
}
export const authStart = ()=>{
    return {
        type : actionTypes.AUTH_START
    }
}
const authSuccess = (token,userId) =>{
    return {
        type : actionTypes.AUTH_SUCCESS,
        token : token,
        userId : userId
    }
}

const authFailure = error=>{
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    }
}


export const authenticateUser = (email,password,isSignupRequest,history)=>{
    return async(dispatch) =>{
        try{
            const API_KEY = process.env.REACT_APP_API_KEY
            const accountRequest = isSignupRequest ? 'signUp' : 'signInWithPassword'
            const url = `https://identitytoolkit.googleapis.com/v1/accounts:${accountRequest}?key=${API_KEY}`
            const authValues = {
                email,
                password,
                returnSecureToken : true
            }
            const authResponse = await axios.post(url,authValues)
            // TODO : Store Tokens in localStorage
            console.log(authResponse)
            dispatch(authSuccess(authResponse.data.idToken,authResponse.data.localId))
            history.push('/')
        }catch(error){
            dispatch(authFailure(error))
        }
    }
}