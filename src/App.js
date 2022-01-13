import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"

class App extends Component{

  componentDidMount(){
    this.props.getCurrentUser()
  }
  
    render() {
      return (
        <NavBar/>
        // <div className="App">
         
                    
        // </div>
      );
    
  }
}

// const mapStateToProps = ({currentUser}) => {
//   return {
//     currentUser
//     // loggedIn: !!state.currentUser,
//     // trips: state.myTrips
//   }
// }

export default connect(null, { getCurrentUser })(App);
