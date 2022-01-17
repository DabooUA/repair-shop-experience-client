import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"


const SignUp = ({ signUpFormData, updateSignUpForm, signup, history }) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signUpFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleHomeTownInfoInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signUpFormData,
      hometown: {
        ...signUpFormData.hometown,
        [name]: value
      }
    }
    updateSignUpForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signUpFormData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleUserInfoInputChange} />
      <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleUserInfoInputChange} />
      <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfoInputChange} />
      <input placeholder="city" value={signupFormData.hometown.city} name="city" type="text" onChange={handleHomeTownInfoInputChange} />
      <input placeholder="state" value={signupFormData.hometown.state} name="state" type="text" onChange={handleHomeTownInfoInputChange} />
      <input placeholder="country" value={signupFormData.hometown.country} name="country" type="text" onChange={handleHomeTownInfoInputChange} />
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignUpForm, signup } )(SignUp)