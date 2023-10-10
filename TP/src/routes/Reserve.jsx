import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Nav, Row, Col, Card } from "react-bootstrap";
import ReserveVol from "../components/ReserveVol";
import ReserveRoom from "../components/ReserveRoom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

class MyComponent extends Component {
    state = {
        activeTab: 'vols'
    };

    setActiveTab = (tab) => {
        this.setState({ activeTab: tab });
    }

    renderContent() {
        switch (this.state.activeTab) {
            case 'vols':
                return <ReserveVol />;
            case 'chambres':
                return <ReserveRoom />;
            default:
                return <ReserveVol />;
        }
    }

    render() {
        return (
            <div>
                <Menu />
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="vols">
                            <Nav.Item>
                                <Nav.Link eventKey="vols" onSelect={() => this.setActiveTab('vols')}>Vols</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="chambres" onSelect={() => this.setActiveTab('chambres')}>Chambres</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Reserver maintenant !</Card.Title>
                        <Card.Text>
                            {this.renderContent()}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Footer />
            </div>
        );
    }
}

export default MyComponent;
