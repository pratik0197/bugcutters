import React, { Component } from 'react'
import {Formik, Form,ErrorMessage,Field} from 'formik'
import { Button } from '@material-ui/core'
import {connect} from 'react-redux'
import classes from './Auth.module.css'
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
        return <div className={classes.Auth}> 
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
                this.props.authenticate(email,password,this.state.isSignUp)
                actions.setSubmitting(false)
            }}
            >
            {
                ({isSubmitting})=>(
                    <Form>
                        <Field type='email' name='email'/>
                        <ErrorMessage name='email' component="div"/>
                        <Field type='password' name='password'/>
                        <ErrorMessage name='password' component="div"/>
                        <Button type='submit' disabled={isSubmitting}>SIGN {this.state.isSignUp?'UP':'IN'}</Button>
                        <Button type='button' onClick={this.changeSignUpOptions}>SIGN {this.state.isSignUp ? 'IN': 'UP'} INSTEAD</Button>
                    </Form>
                )
            }
            </Formik>
        </div>
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        authenticate: (email,password,signup) => {
            dispatch(authenticateUser(email,password,signup))
        }
    }
}
export default connect(null,mapDispatchToProps)(Auth)