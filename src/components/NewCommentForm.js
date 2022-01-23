import React from "react";
import { updateNewCommentForm } from '../actions/newCommentForm.js'
import { createUserComment } from '../actions/userComments.js'
import { connect } from "react-redux";
// import Home from "./Home.js";

const NewCommentForm = ({ updateNewCommentForm, formData, createUserComment}) => {
  
  const { content } = formData

  const handleChange = event => {
    
    const { name, value } = event.target
      updateNewCommentForm (name, value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    createUserComment(formData)
    //   {
    //   ...formData,
    //   userId
      
    // })
    
  }
  return(
    <form id="textBox" onSubmit={handleSubmit}>
      <label>
      Comment: 
      <br/><br/><textarea style={{width: '15em'}} placeholder="Type your comment" name="content" onChange={handleChange} value={content} /><br/><br/>
      </label>
      <input type="submit" value="Post Comment"/>
    </form>
  )
}

const mapStateToProps = state => {
 
  return {
    formData: state.newCommentForm,
    userId: state.currentUser.id,
    
  }
}

export default connect(mapStateToProps, {updateNewCommentForm, createUserComment } )(NewCommentForm)