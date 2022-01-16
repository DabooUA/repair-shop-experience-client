export default (state = [], action ) => {
  switch (action.type){
    case "SET_REPAIR_SHOP":
      return action.repairshops
    default:
      return state
  }
}