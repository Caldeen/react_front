import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import { Jumbotron } from 'react-bootstrap'

export const Home = () => {
    return (
        <Container >
            <Row>
                <Col >
                </Col>
                <Col size={8} lg={6} >
                    <Jumbotron>
                        <h3>Witaj</h3>
                        <p>Aplikacja do tworzenia i zarządzania listą np. zakupów</p>
                        <p>Zawiera w sobie elementy: </p>
                        <p><b>Frontend:</b></p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS- jest niepotrzeby, używany jest Bootstrap-React, elementy stylu zmieniane za jego pomocą</li>
                            <li>JAVASCRIPT używany często i gęsto</li>
                            <li>Bootrap zapewnia responsywność strony</li>
                            <li>Biblioteki/Frameworki:
                                <ul>
                                    <li>React</li>
                                    <li>Bootstrap-React</li>
                                    <li>Redux</li>
                                </ul>
                            </li>
                        </ul>
                        <p><b>Backend:</b></p>
                        <ul>
                            <li>Dosęp <strong>OFFLINE</strong></li>
                            <li>Odczyt z bazy danych</li>
                            <li>Operacje CRUD</li>
                            <li>Operacje Dostęp do produktów per user i komunikacja z serwerem</li>
                            <li>Biblioteki/Frameworki:</li>
                            <ul>
                                <li>Spring-Boot</li>
                                <li>Swagger</li>
                                <li>Baza h2</li>
                            </ul>
                        </ul>
                        <h6 style = {{float:'right'}}>Jarosław Trendziuk </h6>
                    </Jumbotron>
                    <Carousel >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Shopping list</h3>
                                <p>and other</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Login,Register</h3>
                                <p>...</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col  >
                </Col>
            </Row>

        </Container>
    )
}