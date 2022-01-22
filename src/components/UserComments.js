import React from "react"
import { connect } from "react-redux"
import CommentCard from "./CommentCard.js"

const UserComment = props => {
  const commentCards = props.comments ? props.comments.map(r => <CommentCard comment={r} key={r.id} />) : null
  return(
    commentCards
  )
}

const mapStateToProps = state => {
  return {
    comments: state.userComments
  }
}
// console.log(CommentCard)

export default connect(mapStateToProps)(UserComment)
