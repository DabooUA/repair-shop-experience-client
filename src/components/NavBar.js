import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'


const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      {/* { currentUser && currentUser.attributes ? `Welcome, ${currentUser.attributes.name}` : ""}<br/><br/> */}
      
        <NavLink exact activeClassName='' to="/comments">Comments   |  </NavLink>
        <NavLink exact activeClassName='' to="/comment/new">New Comment   |  </NavLink><br/><br/>
        {loggedIn ? <Logout/> : null}
     
      
      
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
