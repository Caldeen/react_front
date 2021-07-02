


const products = (state = [], action) => {
  switch (action.type) {
    case "SHOW_PRODUCTS":
      console.log("payload: " + action.payload)
      if ((!Array.isArray(action.payload)) || action.payload[0] === undefined)
        return state
      console.log(action.payload)
      console.log(action.payload[0].orderDate)
      return action.payload
    case "DEL_ORDER":
      const idd = action.payload
      fetch('http://192.168.0.16:8080/api/orders/' + idd, { method: 'DELETE' })
        .then(response => {
          return response.text()
        })
      return state.filter((item) => item.id != idd)
    case "ADD_ORDER":
      fetch('http://192.168.0.16:8080/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'SESSION': localStorage.getItem('token')
        }
      })
        .then(response => {
          return response.text()
        })
      return state
    case "DEL_PRODUCT":
      const id = action.payload
      fetch('http://192.168.0.16:8080/api/products/' + id, { method: 'DELETE' })
        .then(response => {
          return response.text()
        })
        let clonedState = [...state]
        clonedState.forEach((item) =>item.products=item.products.filter(element =>
          element.productId != action.payload))
      return clonedState
      
    case "ADD_PRODUCT":
      fetch('http://192.168.0.16:8080/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'SESSION': localStorage.getItem('token') }, body: JSON.stringify({
          productName: action.payload.productName,
          productPrice: action.payload.productPrice,
          orderId: action.payload.orderId
        })
      })
        .then(response => {
          return response.text()
        })
      return state
    case "UPDATE_PRODUCT":
      console.log("here" + action.payload)
      fetch('http://192.168.0.16:8080/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: action.payload.productId, newProductName: action.payload.productName,
          newProductPrice: action.payload.productPrice
        })
      })
        .then(response => {
          return response.text()
        })
      return state
    default:
      return state
  }
}

export default products