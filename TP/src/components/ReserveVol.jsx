import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { FaPlaneDeparture, FaPlaneArrival, FaCalendar, FaUser, FaChair } from 'react-icons/fa';

const FlightSearchForm = ({ onSearch }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      origin: departure,
      destination: destination ,
      depart_date: departureDate,
      return_date: returnDate,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={2}>
            <Form.Group controlId="departure">
              <Form.Label><FaPlaneDeparture /> Départ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Départ"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                required 
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="destination">
              <Form.Label><FaPlaneArrival /> Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required 
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="departureDate">
              <Form.Label><FaCalendar /> Date de départ</Form.Label>
              <Form.Control
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required 
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="returnDate">
              <Form.Label><FaCalendar /> Date de retour</Form.Label>
              <Form.Control
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required 
              />
            </Form.Group>
          </Col>
          <Col md={1}>
            <Form.Group controlId="numPassengers">
              <Form.Label><FaUser /> Passagers</Form.Label>
              <Form.Control type="number" defaultValue={1} min={1} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="cabinClass">
              <Form.Label><FaChair /> Classe de cabine</Form.Label>
              <Form.Control as="select">
                <option>Économique</option>
                <option>Premium Économique</option>
                <option>Affaires</option>
                <option>Première</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Rechercher
        </Button>
      </Form>
    </Container>
  );
}

export default FlightSearchForm;
