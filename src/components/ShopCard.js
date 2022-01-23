import React from "react"
// import Link is for future edit link
// import { Link } from "react-router-dom"

const ShopCard = ({shop}) => {
  return(
    shop ?
   
    <div>
      <h2>{shop.attributes.repair_shop_name}</h2>
      <p>{shop.attributes.street_address}</p>
      <p>{shop.attributes.city}</p>
      <p>{shop.attributes.zip_code}</p>
      {/* <p>{shop.attributes.comments}</p> */}
    </div> : null
    
  )
}

export default ShopCard