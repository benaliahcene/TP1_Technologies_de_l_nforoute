import React from 'react';
import { Card, InputGroup, Form, Button } from 'react-bootstrap';

const Sold = () => (
    <Card style={{ width: "18rem" }}>
        <Card.Body>
            <Card.Title>Solde</Card.Title>
            <InputGroup>
                <Form.Control
                    placeholder="Remplir votre solde"
                    aria-label="Solde"
                />
                <InputGroup.Text>$</InputGroup.Text>
                <Button variant="outline-primary">Button</Button>
            </InputGroup>
        </Card.Body>
    </Card>
);

export default Sold;
