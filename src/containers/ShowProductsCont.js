import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import store from '../store'
import {  showProducts } from '../actions';


const ShowProducts = ({ dispatch }) => {
  
    return (
      <div>
        <Button onClick={() => getProducts()} >show products</Button>
      </div>
    )

  }
  const getProducts=()=>{
    const fetchedData= fetch('https://aqueous-savannah-82662.herokuapp.com/api/userOrders',{method:'GET',headers :
    {'SESSION': localStorage.getItem('token')}})
    .then(response=>{return response.json()
        // console.log(response)
        // (response.json()))
    }).then(data=>store.dispatch(showProducts(data)))
    return fetchedData
}

  export default connect()(ShowProducts)