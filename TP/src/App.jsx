import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card , CardHeader, CardBody } from "react-bootstrap";
import LoginPage from "./components/LoginPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";

export default () => (
 <Container style={{marginTop:"150px"}}>
  <Row>
    <Col>
      <Card>


      <CardHeader as="h2" >
          Accueil 
        </CardHeader>
        <CardBody>
          <LoginPage/>
          <SignUpPage/>
        </CardBody>
      </Card>
      
    </Col>
  </Row>
 </Container>
);
