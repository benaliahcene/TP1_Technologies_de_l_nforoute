import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import Menu from "../components/Menu";
import Footer from "../components/Footer"
class MyComponent extends Component {
    render() {
        return (
            <div>
             
                <Container >
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header as="h2">Accueil</Card.Header>
                                <Card.Body>
                                    <LoginPage />
                                    <SignUpPage />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            
            </div>
        );
    }
}

export default MyComponent;
