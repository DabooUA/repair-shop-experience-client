import React from "react"

const CommentCard = ({comment}) => {
  return(
   
    <div>
      <h2>{comment.attributes.content}</h2>
    </div>
    
  )
}

export default CommentCard