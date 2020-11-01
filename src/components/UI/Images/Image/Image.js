import React from 'react'
import classes from './Image.module.css'
const Image = props =>{
    return (
        <img src={props.src} className={classes[props.className ? props.className : 'Image']} alt={props.alt}/>
    )
}

export default Image;