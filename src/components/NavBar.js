import React from 'react'
// import './App.css'
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import Login from "./Login.js"
import Logout from "./Logout.js"

//
const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div>
      {currentUser ? `Welcome, ${currentUser.name}` : ""}
      {currentUser ? <Logout/> : <Login/>}
    </div>
    // <div className="NavBar">
    //   { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout/></> : null}
    // </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
    // loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
