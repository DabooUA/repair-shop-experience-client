import React from "react"
import { connect } from "react-redux"
import ShopCard from "./ShopCard"

const RepairShop = props => {
  const shopCards = props.repairShops.map(r => <ShopCard shop={r} key={r.id} />)
  return(
    shopCards
  )
}

const mapStateToProps = ({repairShops}) => {
  return {
    repairShops
  }
}

export default connect(mapStateToProps)(RepairShop)