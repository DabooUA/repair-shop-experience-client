import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import "../App.css" 


const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          {/* { currentUser && currentUser.attributes ? `Welcome, ${currentUser.attributes.name}` : ""}<br/><br/> */}
          {/* <NavLink exact activeClassName='' to="/comments">Comments   |  </NavLink> */}
          {/* <NavLink exact activeClassName='' to="/comment/new">New Comment   |  </NavLink><br/><br/> */}
          {loggedIn ? <><h4>Logged in as {currentUser.attributes.name}</h4>
            <br/>
          <Logout/></> : null}
          <div />
          <NavLink exact activeClassName='' to="/"> Home Page   </NavLink>
            
        {/* { currentUser ? <Logout/> : <Login/> } */}
        </li>
      </ul>
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
