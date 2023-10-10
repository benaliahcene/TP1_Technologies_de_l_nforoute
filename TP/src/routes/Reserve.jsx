import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import ReserveVol from "../components/ReserveVol";
import ReserveRoom from "../components/ReserveRoom";
import Menu from "../components/Menu";
import Footer from "../components/Footer"
class MyComponent extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Container style={{marginTop:"150px"}}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header as="h2">Accueil</Card.Header>
                                <Card.Body>
                                    <ReserveVol />
                                    <ReserveRoom />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default MyComponent;
