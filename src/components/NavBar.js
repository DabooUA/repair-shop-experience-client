import React from 'react'
import { connect } from 'react-redux'

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      { currentUser && currentUser.attributes ? `Welcome, ${currentUser.attributes.name}` : ""}
      
      
      {/* { currentUser ? <Logout/> : <Login/> } */}
    
    </div>
    
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
