


export const showProducts = (prods) => ({
  type: 'SHOW_PRODUCTS',
  payload: prods
})
export const delProduct = id => ({
  type: 'DEL_PRODUCT',
  payload: id
})
export const addProduct = prod => ({
  type: 'ADD_PRODUCT',
  payload: prod
})
export const delOrder = id => ({
  type: 'DEL_ORDER',
  payload: id
})
export const addOrder = () => ({
  type: 'ADD_ORDER',
  payload: null
})
export const updateProduct = prod => ({
  type: 'UPDATE_PRODUCT',
  payload: prod
})
export const registerUser = user => ({
  type: 'REGISTER',
  payload: user
})
export const loginUser = user => ({
  type: 'LOGIN',
  payload: user
})
export const logoutUser = () => ({
  type: 'LOGOUT',
  payload: null
})