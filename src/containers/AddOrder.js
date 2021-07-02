import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import {  addOrder } from '../actions';


const AddOrder = ({ dispatch }) => {
  
    return (
      <div>
          <p></p>
        <Button onClick={() => dispatch(addOrder())} >add Order</Button>
      </div>
    )

  }

  export default connect()(AddOrder)



