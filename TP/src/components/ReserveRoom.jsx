import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { FaBed, FaCalendar, FaUser, FaDoorOpen } from "react-icons/fa";

const RoomSearchForm = ({ onCitySearch }) => {
  const [searchCity, setSearchCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySearch({ searchCity, checkInDate, checkOutDate });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={3}>
            <Form.Group controlId="location">
              <Form.Label>
                <FaBed /> Localisation
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez localisation"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="checkInDate">
              <Form.Label>
                <FaCalendar /> Date d'arrivée
              </Form.Label>
              <Form.Control
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="checkOutDate">
              <Form.Label>
                <FaCalendar /> Date de départ
              </Form.Label>
              <Form.Control
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={1}>
            <Form.Group controlId="numGuests">
              <Form.Label>
                <FaUser /> Invités
              </Form.Label>
              <Form.Control type="number" defaultValue={1} min={1} />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="roomType">
              <Form.Label>
                <FaDoorOpen /> Type de chambre
              </Form.Label>
              <Form.Control as="select">
                <option>Simple</option>
                <option>Double</option>
                <option>Suite</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="bedType">
              <Form.Label>
                <FaBed /> Type de lit
              </Form.Label>
              <Form.Control as="select">
                <option>Simple</option>
                <option>Double</option>
                <option>King</option>
                <option>Queen</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" className="my-3" type="submit">
          Rechercher
        </Button>
      </Form>
    </Container>
  );
};

export default RoomSearchForm;
