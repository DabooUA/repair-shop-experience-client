export const setRepairShop = shops => {
  return {
    type: "SET_REPAIR_SHOP",
    shops
  }
}

export const getRepairShops = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/repairshops", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error){
          alert(response.error)
      } else {
        dispatch(setRepairShop([]))
      }
    })
    .catch(console.log)
  }
}