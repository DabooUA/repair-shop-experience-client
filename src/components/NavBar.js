import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'


const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink exact activeClass to="/comments">Comments   |  </NavLink>
      <NavLink exact activeClass to="/comment/new">Comments   |  </NavLink><br/><br/>
      {/* {loggedIn ? <Logout/> : null} */}
      {/* { currentUser && currentUser.attributes ? `Welcome, ${currentUser.attributes.name}` : ""} */}
      
      
      {/* { currentUser ? <Logout/> : <Login/> } */}
    
    </div>
    
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
