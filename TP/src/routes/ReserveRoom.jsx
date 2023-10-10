import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import ReserveRoom from "../components/ReserveRoom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Card className="text-center">
      <Card.Header> <h2>Trouvez la chambre de vos rêves dès aujourd'hui.</h2></Card.Header>
          <Card.Body>
            <ReserveRoom />
          </Card.Body>
        </Card>
        <Footer />
      </div>
    );
  }
}

export default MyComponent;
