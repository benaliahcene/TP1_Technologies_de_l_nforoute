import React, { useState } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const HotelInvoice = ({ hotel,user })=> {
    const [isEditing, setIsEditing] = useState(false);
    const currentDate = new Date();
const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    if (!hotel.name) {
        return (
            <div className="container mt-5">
                <Card style={{ width: '30rem', margin: 'auto' }}>
                    <Card.Body>
                        <p>Il n'y a aucune facture pour les hôtels.</p>
                    </Card.Body>
                </Card>
            </div>
        );
    }
    return (
        <div className="container mt-5">
            <Card style={{ width: '30rem', margin: 'auto' }}>
                <Card.Header className="text-center font-weight-bold">
                    Facture de l'Hôtel
                </Card.Header>

                {isEditing ? (
                    <ListGroup variant="flush">
                         <ListGroup.Item>
                                <b>Nom :</b> {user.firstName}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Email :</b> {user.email}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Date :</b> {formattedDate}
                            </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Nom de l'hôtel :</b> {hotel.name}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Lieu :</b> {hotel.location}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Date d'arrivée :</b> {hotel.checkIn}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Date de départ :</b> {hotel.checkOut}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Pays :</b> {hotel.country}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Prix :</b> {hotel.price}$
                        </ListGroup.Item>
                    </ListGroup>
                ) : (
                    <Card.Body>
                        <Card.Title>Résumé de la facture</Card.Title>
                        <p><b>Nom de l'hôtel :</b> {hotel.name}</p>
                        <p><b>Prix payé :</b> {hotel.price}$</p>
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
    hotel: state.room,
    user: state.user,   // Assurez-vous que 'room' est le nom de votre réducteur dans le rootReducer. Si c'est 'hotel', alors remplacez par 'hotel'.
});

export default connect(mapStateToProps)(HotelInvoice);
