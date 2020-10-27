import React, { Component, Fragment } from 'react'
import {Route,Switch} from 'react-router-dom' 
import Auth from './containers/Auth/Auth';
import Navigation from './components/Navigation/Navigation'
import ShowCase from './components/ShowCase/ShowCase';
import Logout from './components/Logout/Logout';
// TODO : ADD Routing
class App extends Component{
  render(){
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/logout' component={Logout}/>
          <Route path='/' component={ShowCase} exact/>
        </Switch>
      </Fragment>
    )
  }
}
export default App;