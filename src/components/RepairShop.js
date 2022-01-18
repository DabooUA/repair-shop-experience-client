import React from "react"
import { connect } from "react-redux"
// import repairShops from "../reducers/repairShops"
import ShopCard from "./ShopCard"

const RepairShop = props => {
  const shopCards = props.shops.length > 0 ? props.shops.map(r => <ShopCard shop={r} key={r.id} />) : null
  return(
    shopCards
  )
}

const mapStateToProps = state => {
  return {
    shops: state.repairShops
  }
}
// console.log(ShopCard)

export default connect(mapStateToProps)(RepairShop)
