import React, { Component } from 'react'
import {Button,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import classes from './Selection.module.css'
import Card from '../../components/UI/Card/Card'
import Labels from '../../utility/Labels'
import {updateSelectedCloth} from '../../store/actions/index'
import { connect } from 'react-redux'
const convertFromOldToNew = {
    '0' : [
        'Cushion Cover',
        'Frock',
        'Kurti',
    ],
    '1' : [
        'Cap',
        'Hand Bag'
    ],
    '2' : [
        'Door mat',
        'Cushion Cover',
        'Designer Tops',
        'TOTE bags'
    ]
}
class Selection extends Component{

    state = {
        selectedCloth : '0',
        clothCondition : '1'
    }

    handleClothConditionChange = (event)=>{
        
        this.setState({
            clothCondition : event.target.value
        })
    }
    handleClothTypeChange = (event)=>{
        this.props.selectClothes(event.target.value)
        this.setState({
            selectedCloth : event.target.value
        })
    }

    buttonClickHandler = ()=>{
        this.props.history.push('/upload')
    }
    render(){
        let cardsArray = null;
        if(this.state.selectedCloth !==null){
            cardsArray = convertFromOldToNew[this.state.selectedCloth].map(object=>{
                return <Card key={object} content={object}/>
            })
        }
        return  (
            <div className={classes.Selection}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Type</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.state.clothing} onChange={this.handleClothTypeChange}>
                        <FormControlLabel value="0" control={<Radio />} label="Saree"/>
                        <FormControlLabel value="1" control={<Radio />} label="Jeans" />
                        <FormControlLabel value="2" control={<Radio />} label="T Shirt" />
                    </RadioGroup>
                </FormControl>

                <br/>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Condition</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.state.clothing} onChange={this.handleClothConditionChange}>
                        <FormControlLabel value="0" control={<Radio />} label="Rugged"/>
                        <FormControlLabel value="1" control={<Radio />} label="Good" />
                    </RadioGroup>
                </FormControl>                
                <br/>
                <br/>
                <br/>
                <p>{Labels[this.state.selectedCloth]} can be converted to</p>
                {cardsArray===null ? 'Please select a cloth' : cardsArray}
                <br/>
                <br/>
                <br/>
                <Button onClick={this.buttonClickHandler}>PROCEED TO UPLOAD</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectClothes: (id) => {
            dispatch(updateSelectedCloth(id))
        }
    }
}
export default connect(null,mapDispatchToProps)(withRouter(Selection))