const initialState = []

export default (state = initialState, action ) => {
  switch (action.type){
    case "SET_USER_COMMENTS":
      return action.comments

    case "ADD_COMMENT":
      return state.concat(action.comment)

    case "DELETE_COMMENT":
      return state.filter(comment => comment.id === action.commentId ? false : true)

    case "CLEAR_USER_COMMENTS":
      return initialState
      
    default:
      return state
  }
}