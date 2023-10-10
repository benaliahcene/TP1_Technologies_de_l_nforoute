import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import ReserveVol from "../components/ReserveVol";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Card className="text-center">
      <Card.Header> <h2>Des millions de vols pas chers. Une simple recherche.</h2></Card.Header>
          <Card.Body>
            <ReserveVol />
          </Card.Body>
        </Card>
        <Footer />
      </div>
    );
  }
}

export default MyComponent;
