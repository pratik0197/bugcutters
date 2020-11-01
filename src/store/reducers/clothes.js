import * as actionTypes from '../actions/actionTypes'
import updateObject from '../updateObjects'
const initState = {
    clothId : null
}
const clothesReducer = (state = initState,action)=>{
    switch(action.type){    
        case actionTypes.CLOTH_SELECT:
            return updateObject(state,{
                clothId : action.id
            })
        default : 
            return state
    }
}

export default clothesReducer