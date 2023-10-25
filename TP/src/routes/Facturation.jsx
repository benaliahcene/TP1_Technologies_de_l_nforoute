import { connect } from 'react-redux';
import RoomFacture from '../components/RoomFacture';
import FlightFacture from '../components/FlightFacture';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import React, { Component } from "react";

class MyComponent extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center vh-98">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={8} lg={6}>
                            <Card style={{ width: '100%' }}>
                                <Card.Header as="h2">Les factures Flights & Hotels</Card.Header>
                                <Card.Body>
                                    <RoomFacture />
                                    <FlightFacture />
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
