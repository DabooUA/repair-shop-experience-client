export default (state = [], action ) => {
  switch (action.type){
    case "SET_REPAIR_SHOP":
      return action.shops
    case "CLEAR_REPAIR_SHOPS":
      return []
    default:
      return state
  }
}