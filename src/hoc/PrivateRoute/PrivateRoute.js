import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const PrivateRoute = props =>{
    const componentToBeRendered = props.isAuthenticated ? props.children : <Redirect to='/auth'/> 
    return (
        <Fragment>
            {componentToBeRendered}
        </Fragment>
    )
    
}


const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(PrivateRoute);