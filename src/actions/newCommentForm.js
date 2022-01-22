export const updateNewCommentForm = (name, value) => {
  return {
    type: "UPDATE_NEW_COMMENT_FORM",
    formData: { name, value }
  }
}

export const resetCommentForm = () => {
  return {
    type: "RESET_COMMENT_FORM"
  }
}