import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaHome, FaPlane, FaBed, FaUser, FaWallet } from "react-icons/fa";
import { Link } from 'react-router-dom';

const menuStyle = {
  position: "sticky",
  top: "0",
  zIndex: "1000"  // pour s'assurer que le menu est toujours au-dessus des autres éléments
};

const Menu = (props) => (
  <Container fluid className="p-5 mb-2 bg-light text-dark" style={menuStyle}>
    <h1>
      <FaPlane />
      <b>FlyWithUs</b>.
    </h1>
    <p>Welcome to our <b>reservation</b> application</p>

    <Link to="/vols">
      <Button variant="primary" className="m-2">
        <FaPlane /> Vols
      </Button>
    </Link>

    <Link to="/chambres">
      <Button variant="primary" className="m-2">
        <FaBed /> Chambres
      </Button>
    </Link>

    <Link to="/profil">
      <Button variant="primary" className="m-2">
        <FaUser /> Profil
      </Button>
    </Link>

    <Link to="/solde">
      <Button variant="primary" className="m-2">
        <FaWallet /> Solde
      </Button>
    </Link>

    <Link to="/facturation">
      <Button variant="primary" className="m-2">
        <FaWallet /> Facturation
      </Button>
    </Link>
  </Container>
);

export default Menu;
