export const setUserComment = comments => {
  return {
    type: "SET_USER_COMMENT",
    comments
  }
}

export const clearUserComments = () => {
  return {
    type: "CLEAR_USER_COMMENTS"
  }
}


export const addComment = comment => {
  return {
    type: "ADD_COMMENT",
    comment
  }
}

export const deleteUserComment = commentId => {
  return {
    type: "DELETE_COMMENT",
    commentId
  }
}

export const updateUserComment = comment => {
  return {
    type: "UPDATE_COMMENT",
    comment
  }
}