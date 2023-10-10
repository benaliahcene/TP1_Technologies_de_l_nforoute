import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaHome,  FaPlane, FaBed, FaUser, FaWallet } from "react-icons/fa";

const Home = (props) => (
  <Container fluid className="p-5 mb-2 bg-light text-dark">
    <h1>
      <FaPlane />
      <b>FlyWithUs</b>.
    </h1>
    <p>Welcome to our <b>reservation</b> application</p>
    
  

    <Button variant="primary" className="m-2">
      <FaPlane /> Vols
    </Button>

    <Button variant="primary" className="m-2">
      <FaBed /> Chambres
    </Button>

    <Button variant="primary" className="m-2">
      <FaUser /> Profil
    </Button>

    <Button variant="primary" className="m-2">
      <FaWallet /> Solde
    </Button>
  </Container>
);

export default Home;
