import { connect } from 'react-redux'
import ProductListComp from '../components/ProductListComp'
import {showProducts} from '../actions/index'

const getProducts = orders => {
  return orders
}

const mapStateToProps = state => {
  if(state.products[0]!==undefined){
    console.log(state)
    console.log(state.products)
    console.log(state.products[0])
    console.log(state.products[0].id)
  }
  return {
    orders: state.products[0]===undefined?[]:getProducts(state.products)
  }
} 
const mapDispatchToProps ={
    showProducts
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(ProductListComp)
