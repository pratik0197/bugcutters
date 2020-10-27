const updateObject = (state,updatedList)=>{
    return {
        ...state,
        ...updatedList
    }
}
export default updateObject