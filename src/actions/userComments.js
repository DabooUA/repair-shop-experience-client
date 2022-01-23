import { resetCommentForm  } from "./newCommentForm"

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
          // debugger
          dispatch(setUserComment(response))
        }
      })
      .catch(console.log)
  }
}

export const createUserComment = (commentData, history) => {
  return dispatch => {
    const sendCommentData = {
      content: commentData.content,
      user_id: commentData.userId,
      repairshop_id: commentData.repairshopId
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
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(addComment(response.data))
          dispatch(resetCommentForm())
          dispatch(setUserComment(response))
          history.push(`/comments/${response.data.id}`)
        }
      })
      .catch(console.log)
  }
}

export const deleteComment = (commentId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/comments/${commentId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(deleteUserComment(commentId))
          history.push(`/comments`)
        }
      })
      .catch(console.log)
  }
}

