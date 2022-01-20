import React from "react"
import { connect } from "react-redux"
// import repairShops from "../reducers/userComments"
import CommentCard from "./CommentCard.js"

const UserComments = props => {
  const commentCards = props.comments.length > 0 ? props.comments.map(r => <CommentCard comment={r} key={r.id} />) : null
  return(
    commentCards
  )
}

const mapStateToProps = state => {
  return {
    shops: state.userComments
  }
}
// console.log(CommentCard)

export default connect(mapStateToProps)(UserComments)
