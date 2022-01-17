import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from "../actions/signUpForm.js"
import { signup } from "../actions/currentUser.js"


const SignUp = ({ signUpFormData, updateSignUpForm, signup, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signUpFormData,
      [name]: value
    }
    updateSignUpForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signUpFormData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Full Name" value={signUpFormData.name} name="name" type="text" onChange={handleInputChange} />
      <input placeholder="Username" value={signUpFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="Password" value={signUpFormData.password} name="password" type="text" onChange={handleInputChange} />
    
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signUpFormData: state.signUpForm
  }
}

export default connect(mapStateToProps, { updateSignUpForm, signup } )(SignUp)