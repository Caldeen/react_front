import { Col, Row } from "react-bootstrap";
import { Button, Form } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { updateProduct } from "../actions";




const UpdateProduct = ({ dispatch }) => {
    let productName
    let productPrice
    let productId
    const handleSubmit = (param) => {
        param.preventDefault();
        console.log(productName)
        console.log(productPrice)
        dispatch(updateProduct({productId, productName, productPrice }))
    }
    const onPriceChange = ({ target: { value } }) => {
        productPrice = value
        console.log(value)
    }
    const onIdChange = ({ target: { value } }) => {
        productId = value
        console.log(value)
    }
    const onNameChange = ({ target: { value } }) => {
        productName = value
        console.log({ value })
    }
    return (

        <Form onSubmit={handleSubmit}>
            <Row className="g-3">
            <Col md>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Enter ID</Form.Label>
                        <Form.Control type="number" placeholder="Enter product Id"
                            required
                            value={productId}
                            onChange={onIdChange} />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Enter new name</Form.Label>
                        <Form.Control type="text" placeholder="Enter new name"
                            required
                            value={productName}
                            onChange={onNameChange} />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group className="mb-3" controlId="formBasicNumber2">
                        <Form.Label>Enter new  price</Form.Label>
                        <Form.Control type="number" placeholder="Enter new  price"
                            required
                            value={productPrice}
                            onChange={onPriceChange}
                            step="0.05" />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Update Product
      </Button>
        </Form>
    )
}
export default connect()(UpdateProduct)
