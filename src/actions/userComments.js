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

export const getUserComments = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/comments", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setUserComment(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createUserComment = (commentData, history) => {
  return dispatch => {
    const sendCommentData = {
      content: commentData.content,
      user_id: commentData.user_id,
      repairshop_id: commentData.repairshop_id
    }

    return fetch("http://localhost:3001/api/v1/comments", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendCommentData)
    })
    .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addComment(resp.data))
          dispatch(resetCommentForm())
          history.push(`/comments/${resp.data.id}`)
        }
      })
      .catch(console.log)
  }
}

