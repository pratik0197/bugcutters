import { connect } from 'react-redux'
import React,{Component} from 'react'
import { Redirect } from 'react-router-dom'
import { logout } from '../../store/actions/index'

class Logout extends Component{
    componentDidMount(){
        this.props.logout()
    }
    render(){
        return <Redirect to='/'/>
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(null,mapDispatchToProps)(Logout)