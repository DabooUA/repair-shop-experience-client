import React from 'react'
// import { setRepairShop } from '../actions/repairShops'
// import MyTrips from './MyComments.js'
import RepairShop from './RepairShop.js'
import UserComments from './UserComments.js'

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <RepairShop/>,
      <UserComments/>
      
    </div>
  )
}

export default MainContainer