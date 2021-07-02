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
    const fetchedData= fetch('http://192.168.0.16:8080/api/userOrders',{method:'GET',headers :
    {'SESSION': localStorage.getItem('token')}})
    .then(response=>{return response.json()
        // console.log(response)
        // (response.json()))
    }).then(data=>store.dispatch(showProducts(data)))
    return fetchedData
}

  export default connect()(ShowProducts)