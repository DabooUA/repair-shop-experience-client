import React from "react"

const ShopCard = ({shop}) => {
  return(
    <p>{shop.attributes.repair_shop_name}</p>
  )
}

export default ShopCard