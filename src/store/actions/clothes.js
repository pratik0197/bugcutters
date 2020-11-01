import * as actionTypes from './actionTypes'
export const updateSelectedCloth = (clothId)=>{
    return {
        type : actionTypes.CLOTH_SELECT,
        id : clothId
    }
}