import { Col, Row } from "react-bootstrap";
import { Button, Form,Container } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import {  registerUser } from "../actions";

const Register = ({ dispatch }) => {
    let username
    let password
    const handleSubmit = (param) => {
        param.preventDefault();
        console.log(username)
        console.log(password)
        dispatch(registerUser({ username: username, password: password }))
    }
    const onPasswordChange = ({ target: { value } }) => {
        password = value
        console.log(value)
    }
    const onUsernameChange = ({ target: { value } }) => {
        username = value
        console.log({ value })
    }
    return (
        <Container>
            <Row>
             
            <Col sm></Col>
            <Col md='auto' lg='auto'>

        <Form  onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Enter username</Form.Label>
                        <Form.Control type="text" placeholder="username"
                            required
                            value={username}
                            onChange={onUsernameChange}
                        />
                    </Form.Group>
                    <Form.Group  className="mb-3" controlId="formBasicNumber2">
                        <Form.Label>Enter password</Form.Label>
                        <Form.Control type="password" placeholder="password"
                            required
                            value={password}
                            onChange={onPasswordChange}
                            step="0.05" />
                    </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
            </Col>
            <Col sm></Col>
            </Row>
        </Container>
    )
}
export default connect()(Register)