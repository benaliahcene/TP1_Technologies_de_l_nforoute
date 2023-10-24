import React, { useState } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const FlightInvoice = ({ vol }) => {
    const [isEditing, setIsEditing] = useState(false);
    
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };
       console.log(vol);
    return (
        <div className="container mt-5">
            <Card style={{ width: '30rem', margin: 'auto' }}>
                <Card.Header className="text-center font-weight-bold">
                    Facture de Vol
                </Card.Header>

                {isEditing ? (
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <b>Compagnie aérienne :</b> {vol.AC}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>De :</b> {vol.From}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>À :</b> {vol.To}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Numéro de vol :</b> {vol.Number_flight}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Prix :</b> {vol.Price}$
                        </ListGroup.Item>
                    </ListGroup>
                ) : (
                    <Card.Body>
                        <Card.Title>Résumé de la facture</Card.Title>
                        <p><b>Facture de Vol :</b> Compagnie {vol.AC}</p>
                        <p><b>Prix payé :</b> {vol.Price}$</p>
                    </Card.Body>
                )}
                <Card.Footer className="text-center">
                    <Button variant="info" onClick={toggleEdit}>
                        {isEditing ? 'Masquer' : 'Afficher'} les détails
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => ({
    vol: state.vol,  // Assurez-vous que 'vol' est le nom de votre réducteur dans le rootReducer
});

export default connect(mapStateToProps)(FlightInvoice);
