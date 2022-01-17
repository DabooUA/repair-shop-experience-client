import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import Login from './components/Login';
// import Logout from './components/Logout';
// import MainContainer from "./components/MainContainer.js"
import RepairShop from './components/RepairShop';
import { Route } from 'react-router-dom'

class App extends Component{

  componentDidMount(){
    this.props.getCurrentUser()
  }
  
    render() {
      return ( 
        
        <div className="App">
          <NavBar/>
            <Route path="/login" component={Login}/>
            <Route path="/repair-shops" component={RepairShop}/>
            
        </div>  
        
      );
    
  }
}

export default connect(null, { getCurrentUser })(App);
