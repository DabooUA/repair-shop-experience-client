import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import repairShops from './reducers/repairShops.js'
import signUpForm from './reducers/signUpForm.js'
import thunk from "redux-thunk";

const reducer = combineReducers({
  
  currentUser,
  loginForm,
  repairShops,
  signUpForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store