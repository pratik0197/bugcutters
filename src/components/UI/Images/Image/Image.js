import React from 'react'
import classes from './Image.module.css'
const Image = props =>{
    console.log(props.src)
    return (
        <img src={props.src} className={classes.Image} alt='Something'/>
    )
}

export default Image;