import React from "react";
import { Container } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <Container fluid className="bg-dark text-white p-3">
    <div className="d-flex justify-content-between">
      <div>
        <h5><FaPhone /> +1 (514)515-5975</h5>
        <h5><FaEnvelope /> contact@FlyWithUs.ca</h5>
      </div>
      <p>&copy; 2023 FlyWithUs. Tous droits réservés.</p>
    </div>
  </Container>
);

export default Footer;
