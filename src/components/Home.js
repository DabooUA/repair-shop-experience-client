import React from "react";
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <span>
    <h1> Car Repair Shop List</h1>
     Welcome, please <Link to='/login'> Log In </Link>  or <Link to='/signup'>Sign Up</Link> to see the car repair shop list!
    </span>  
  </div>
  )

export default Home;

