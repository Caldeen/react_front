import { Nav, Navbar } from "react-bootstrap"
import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { logoutUser } from "../actions"
import { Form, Button } from "react-bootstrap"
export const NavBar = () => {
    const dispatch = useDispatch();
    const upd = () => {
        console.log(localStorage)
        if (localStorage.getItem('user')) {
            if (localStorage.getItem('user') !== 'none')
                return localStorage.getItem('user') + ' !'

        }
        return 'guest!'
    }



    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/home">Wish list app</Navbar.Brand>
            <Nav variant='pills' className="mr-auto" bg='brown'>

                <Nav.Link as={Link} to='/home'  >Home</Nav.Link>


                <Nav.Link as={Link} to='/wishlist'>Wishlist</Nav.Link>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            </Nav>
            <Form onSubmit={(e) => {
                e.preventDefault()
                dispatch(logoutUser())
            }}>
                <Button variant="primary" type="submit">logout</Button>

            </Form>
            <h4>
                <Badge variant="light">hello {upd()}</Badge>
            </h4>
        </Navbar>
    )
}