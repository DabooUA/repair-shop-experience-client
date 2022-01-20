export default (state = [], action ) => {
  switch (action.type){
    case "SET_USER_COMMENT":
      return action.comments
    case "ADD_COMMENT":
      return state.comments.concat(action.comment)
    case "CLEAR_USER_COMMENTS":
      return []
    default:
      return state
  }
}