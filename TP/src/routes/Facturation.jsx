import React from 'react';
import { Card, InputGroup, Form, Button } from 'react-bootstrap';

  function Facturation() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Facture</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">facture de vol </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Supprimer </Card.Link>
          <Card.Link href="#">Afficher</Card.Link>
        </Card.Body>
      </Card>
    );
  }
  
export default Facturation;
