import React,{Component} from 'react'
import {Button, Input,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel} from '@material-ui/core'
import classes from './Upload.module.css'
import axios from '../../apis/imageUploadBackend'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'
import Image from '../../components/UI/Images/Image/Image'
import Label from '../../utility/Labels'
class Upload extends Component{
    state = {
        uploadedFile : null,
        id : null,
        loading : false,
        clothing : '0'
    }

    onChange = event=>{
        const file = event.target.files[0]
        this.setState({
            uploadedFile : file 
        })
    }
    onSubmit = async()=>{

        try{    
            this.setState({
                loading : true
            })
            const formData = new FormData() 
            formData.append('image',this.state.uploadedFile)
            const response = await axios.post(`/upload/image/${this.state.clothing}`,formData)
            this.setState({
                loading : false,
                id : response.data.image
            })
        }catch(e){
            
        }
    }
    handleRadioChange = (event)=>{
        this.setState({
            clothing : event.target.value
        })
    }
    render(){
        console.log(this.props.id)
        let radiosArray = null
        if(this.props.id === '0')
            radiosArray = (
                        
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Select Clothing</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.clothing} onChange={this.handleRadioChange}>
                            <FormControlLabel value="0" control={<Radio />} label="Frocks"/>
                            
                            <FormControlLabel value="2" control={<Radio />} label="Cushion Cover" />
                            <FormControlLabel value="3" control={<Radio />} label="Kurti" />
                        </RadioGroup>
                    </FormControl>
            )
        else if(this.props.id === '1')
                radiosArray = (
                    
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Select Clothing</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.clothing} onChange={this.handleRadioChange}>
                            
                            <FormControlLabel value="1" control={<Radio />} label="Cap" />
                            <FormControlLabel value="2" control={<Radio />} label="Hand Bag" />
                            
                        </RadioGroup>
                    </FormControl>
                )
        return (
        <div className={classes.center}>
            <p>Do you have old and ordinary {Label[this.props.id]} in your wardrobe? Then it’s the right time to take out those {Label[this.props.id]} and recycle them into something creative and designer.</p>
            
            {radiosArray}
            <br/>
            <br/>
            <br/>
            <Input type='file' onChange={this.onChange} />
            <br/>
            <Button type='submit' onClick={this.onSubmit}>UPLOAD AND GET</Button>
            
            <br/>

            <p><strong>This is your transformed cloth</strong></p>
            {!this.state.loading ?<Image className='UploadImage' src={`data:image/png;base64,${this.state.id}`} alt="Preview Here After File is uploaded" /> : <Spinner/>}
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.user,
        isAuthenticated  : state.auth.token !== null,
        id : state.clothes.clothId
    }
}

export default connect(mapStateToProps)(Upload)