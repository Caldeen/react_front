import React from 'react'
import { connect } from 'react-redux'
import { delProduct } from '../actions'
import {Button, Form} from 'react-bootstrap'
const DelProduct = ({ dispatch }) => {
  let input
const handleSubmit=(param)=>{
    param.preventDefault();
    dispatch(delProduct(input))
    console.log(input)
}
const onChange=({target:{value}})=>{
    input=value
    console.log({value})
}
return (
    
    <Form onSubmit={    handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>Delete product</Form.Label>
    <Form.Control type="number" placeholder="Enter id to delete"
    required
    value={input}
    onChange={onChange} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Delete
  </Button>
  </Form>
)
}

export default connect()(DelProduct)
