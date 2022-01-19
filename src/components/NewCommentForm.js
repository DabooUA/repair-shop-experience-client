import React from "react";
import { updateNewCommentForm } from '../actions/newCommentForm.js'
import { connect } from "react-redux";

const NewCommentForm = ({content, history}) => {

  const handleChange = event => {
    
    const { name, value } = event.target
      updateNewCommentForm (name, value)
  }
  const handleSubmit = event => event.preventDefault()
  return(
    <form onSubmit={handleSubmit}>
      <br/><br/><input placeholder="Type your comment" name="content" onChange={handleChange} value={content} /><br/><br/>
      <input type="submit" value="Post Comment"/>
    </form>
  )
}

const mapStateToProps = state => {
  const { content } = state.newCommentForm
  return {
    content
  }
}

export default connect(mapStateToProps, {updateNewCommentForm} )(NewCommentForm)