import React from "react"
import { connect } from "react-redux"
// import ShopCard from "./ShopCard"
import { Link } from "react-router-dom"

const RepairShop = props => {
  const shopCards = props.shops.length > 0 ? 
  props.shops.map(r => (<p key={r.id}> <Link to={`/repair-shops/${r.id}`}> {r.attributes.repair_shop_name} </Link></p>)) : null
  
  return shopCards
  
}

const mapStateToProps = state => {
  return {
    shops: state.repairShops
  }
}
// console.log(ShopCard)

export default connect(mapStateToProps)(RepairShop)
