import React, { Fragment } from 'react'
import Image from './Image/Image'
import classes from './Images.module.css'
import ex1Output from '../../../assets/ex1/output.jpg'
import ex1Orig from '../../../assets/ex1/raw.jpg'
import ex1Suggested from '../../../assets/ex1/suggested.jpg'
import ex2Output from '../../../assets/ex2/output.jpg'
import ex2Orig from '../../../assets/ex2/raw.jpg'
import ex2Suggested from '../../../assets/ex2/suggested.jpg'
import ex3Output from '../../../assets/ex3/output.jpg'
import ex3Orig from '../../../assets/ex3/raw.jpg'
import ex3Suggested from '../../../assets/ex3/suggested.jpg'
import Card from '../Card/Card'
import Labels from '../../../utility/Labels'
const Images = props =>{
    const images = [{
            output : ex1Output,
            orig : ex1Orig,
            suggested : ex1Suggested
        },
        {
            output : ex2Output,
            orig : ex2Orig,
            suggested : ex2Suggested
        },
        {
            output : ex3Output,
            orig : ex3Orig,
            suggested : ex3Suggested
        }
    ]    
    const imageComponent = images.map((imageSet,idx)=>{
        const contentDisplay = (
            <Fragment>
                <p style={{
                    display: 'block',
                    textAlign : 'left',
                    fontWeight : 'bold',
                    fontSize : '20px'
                }}>{Labels[idx]} converted to</p>
                <Image src={imageSet.orig} />
                <Image src={imageSet.suggested} />
                <Image src={imageSet.output} />
            </Fragment>
        )
        return (
            <div key={idx} className={classes.ImageRow}>
                <Card content={contentDisplay}/>
            </div>
        )
    })
    return(
        <Fragment>
            {imageComponent}
        </Fragment>
    )
    
}

export default Images;