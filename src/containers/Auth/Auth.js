import React, { Component } from 'react'
import {Formik} from 'formik'
import { Button, TextField,DialogActions } from '@material-ui/core'
import {connect} from 'react-redux'
import classes from './Auth.module.css'
import {withRouter} from 'react-router-dom'
import {authenticateUser} from '../../store/actions/index'
class Auth extends Component{
    state = {
        isSignUp : true
    }

    changeSignUpOptions = ()=>{
        this.setState(prevState => {
            return {
                isSignUp : !prevState.isSignUp
            }
        })
    }
    render(){
        return(<div className={classes.HorizontalCenter}><div className={classes.Auth}> 
            <Formik 
            initialValues = {{email : '',password : ''}}
            validate = {
                values=>{
                    const errors = {}
                    if(!values.email)
                        errors.email = 'Required'
                    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                        errors.email = 'Invalid Email Address'
                    if(!values.password)
                        errors.password = 'Required'
                    else if(values.password.length <6)
                        errors.password = 'Password length must be >=6'
                    return errors
                }
            }
            onSubmit = {({email,password},actions)=>{
                this.props.authenticate(email,password,this.state.isSignUp,this.props.history)
                actions.setSubmitting(false)
            }}
            >
            {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        error={errors.email && touched.email}
                        label="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.email && touched.email) && errors.email}
                        margin="normal"
                      />

                      <TextField
                        label="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.password && touched.password) && errors.password}
                        margin="normal"
                      />
                      <DialogActions>
                        <Button type="submit" disabled={isSubmitting}>
                          SIGN {this.state.isSignUp ? 'UP' : 'IN'}
                        </Button>
                        <Button onClick={this.changeSignUpOptions}>SIGN {this.state.isSignUp ? 'IN' : 'UP'} INSTEAD</Button>
                      </DialogActions>
                    </form>
                  );
                }}
            </Formik>
        </div>
        </div> )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        authenticate: (email,password,signup,) => {
            dispatch(authenticateUser(email,password,signup))
        }
    }
}
export default connect(null,mapDispatchToProps)(withRouter(Auth))