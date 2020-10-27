import React from 'react'
import Images from '../UI/Images/Images'
import classes from './ShowCase.module.css'
// TODO : Render Images
const showCase = props =>{
    return(
        <div>
            <div className={classes.center}>
                <Images imageNumbers={[1,2,3]}/>
            </div>
        </div>
    )
    
}

export default showCase;