import { Col, Row } from "react-bootstrap";
import { Button, Form } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from "../actions";

const AddProduct = ({ dispatch }) => {
  let productName
  let productPrice
  let orderId
  const handleSubmit = (param) => {
    param.preventDefault();
    console.log(productName)
    console.log(productPrice)
    console.log(orderId)
    dispatch(addProduct({ productName, productPrice,orderId }))
  }
  const onPriceChange = ({ target: { value } }) => {
    productPrice = value
    console.log(value)
  }
  const onNameChange = ({ target: { value } }) => {
    productName = value
    console.log({ value })
  }
  const onIdChange = ({ target: { value } }) => {
    orderId = value
    console.log({ value })
  }
  return (

    <Form onSubmit={handleSubmit}>
      <Row className="g-2">
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Enter product name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name"
              required
              value={productName}
              onChange={onNameChange} />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicNumber2">
            <Form.Label>Enter price </Form.Label>
            <Form.Control type="number" placeholder="Enter price "
              required
              value={productPrice}
              onChange={onPriceChange}
              step="0.05" />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicNumber3">
            <Form.Label>enter order id</Form.Label>
            <Form.Control type="number" placeholder="enter order id"
              required
              value={orderId}
              onChange={onIdChange} />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        AddProduct
      </Button>
    </Form>
  )
}
export default connect()(AddProduct)