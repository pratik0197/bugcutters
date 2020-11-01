import React, { Component, Fragment } from 'react'
import {Route,Switch} from 'react-router-dom' 
import Auth from './containers/Auth/Auth';
import Navigation from './components/Navigation/Navigation'
import ShowCase from './components/ShowCase/ShowCase';
import Logout from './components/Logout/Logout';
import Upload from './containers/Upload/Upload';
import PrivateRoute from './hoc/PrivateRoute/PrivateRoute';
import Selector from './containers/Selection/Selection'
class App extends Component{
  render(){
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/logout' component={Logout}/>
          <PrivateRoute path='/select'>
            <Selector/>
          </PrivateRoute>
          <PrivateRoute path='/upload'>
            <Upload/>
          </PrivateRoute>
          <Route path='/' component={ShowCase} exact/>
        </Switch>
      </Fragment>
    )
  }
}
export default App;