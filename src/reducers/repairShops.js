const initialState = []

export default (state = initialState, action ) => {
  switch (action.type){
    case "SET_REPAIR_SHOP":
      return action.shops
    case "CLEAR_REPAIR_SHOPS":
      return initialState
    default:
      return state
  }
}