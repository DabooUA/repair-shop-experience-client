import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      { currentUser && currentUser.attributes ? `Welcome, ${currentUser.attributes.name}` : ""}
      <button> Log In </button>
      OR 
      <button> Signup </button>
      
      { currentUser ? <Logout/> : <Login/> }
      <button> Log Out </button>
    </div>
    
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
