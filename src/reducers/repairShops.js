export default (state = [], action ) => {
  switch (action.type){
    case "SET_REPAIR_SHOP":
      return action.shops
    default:
      return state
  }
}