import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
// import NavBar from "./components/NavBar.js"
import Login from './components/Login.js';
// import MainContainer from "./components/MainContainer.js"
import RepairShop from './components/RepairShop.js';
import { Route } from 'react-router-dom'
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';
import Logout from './components/Logout.js'
import { Switch, withRouter } from 'react-router-dom'

class App extends Component{

  componentDidMount(){
    this.props.getCurrentUser()
  }
  
    render() {
      const { loggedIn } = this.props
      return ( 
        <div className="App">
        {loggedIn ? <Logout/> : null}
          {/* <NavBar/> */}
          <Switch>
            <Route exact path='/' render={() => loggedIn ? <RepairShop/> : <Home/> }/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/repair-shop' component={RepairShop}/>
          </Switch> 
        </div>  
        
      );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
