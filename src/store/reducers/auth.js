import updateObject from '../updateObjects'
import * as actionTypes from '../actions/actionTypes'
const initialState = {
    token : null,
    userId : null,
    loading : false
}

const logout = (state,action)=>{
    return updateObject(state,{
        token : null,
        userId : null
    })
}
const authStart = (state,action)=>{
    return updateObject(state,{
        loading : true
    })
}

const authSuccess = (state,action)=>{
    return updateObject(state,{
        token : action.token,
        userId : action.userId,
        loading  : false
    })
}
const authFailure = (state,action)=>{
    return updateObject(state,{
        error : action.error,
        loading : false
    })
}

const authReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_START :
            return authStart(state,action)
        case  actionTypes.AUTH_SUCCESS :
            return authSuccess(state,action)
        case actionTypes.AUTH_FAIL :
            return authFailure(state,action)
        case actionTypes.AUTH_LOGOUT : 
            return logout(state,action)
        default : 
            return state
    }
}
export default authReducer