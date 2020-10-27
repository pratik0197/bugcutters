import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {VpnKey,ExitToApp,Home,CloudUpload} from '@material-ui/icons'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))
const  MenuAppBar = props=> {
  const materialClasses = useStyles();
  const auth = props.isAuthenticated

  return (
    <div className={materialClasses.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={materialClasses.title}>
            Lorem Ipsum
          </Typography>
            <NavLink to='/' className={classes.NavigationItems}><Home/></NavLink>
            <NavLink to='/upload' className={classes.NavigationItems}><CloudUpload/></NavLink>
            <NavLink to={auth ?'/logout' :'/auth'} className={classes.NavigationItems}>{auth ? <ExitToApp/> : <VpnKey/>}</NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        isAuthenticated: state.auth.token!==null
    }
}

export default connect(mapStateToProps)(MenuAppBar)