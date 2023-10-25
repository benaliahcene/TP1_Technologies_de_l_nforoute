import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { connect } from 'react-redux';
import { updateUser } from "../actions/userActions";
import { saveRoomData } from '../actions/roomActions';

const RoomInfo = ({ searchDetails, user, updateUser, saveRoomData}) => {
  const [hotels, setHotels] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const token = "27dc1b903af1a11009cd1701a64ad4bf"; 
  const currency = "CAD";

  const handleReservation = (hotel) => {
    if (user.solde >= hotel.priceFrom) {
      const newSolde = user.solde - hotel.priceFrom;
      updateUser({
        ...user,
        solde: newSolde
      });
      setConfirmationMessage(`Vous avez réservé une chambre à l'hôtel ${hotel.hotelName}.`);
      setTimeout(() => setConfirmationMessage(''), 3000);
      const roomInfo = {
        location: hotel.location.name,
        checkIn: searchDetails.checkInDate,
        checkOut: searchDetails.checkOutDate,
        price: hotel.priceFrom,
        name: hotel.hotelName,
        country: hotel.location.country
    };
    saveRoomData(roomInfo);
} else {
      setErrorMessage("Votre solde est insuffisant. Veuillez recharger votre compte.");
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  useEffect(() => {
    axios
      .get(
        `/hotel/api/v2/cache.json?location=${searchDetails.searchCity}&checkIn=${searchDetails.checkInDate}&checkOut=${searchDetails.checkOutDate}&currency=${currency}&limit=100&token=${token}`
      )
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchDetails]);

  return (
    <div>
        {confirmationMessage && <Alert variant="success">{confirmationMessage}</Alert>}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        {hotels.map((hotel, key) => (
            <div key={key}>
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>{hotel.hotelName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <b>{hotel.stars} étoiles</b>
                        </Card.Subtitle>
                        <Card.Text>
                            <p><b>Lieu :</b> {hotel.location.name}</p>
                            <p><b>Pays :</b> {hotel.location.country}</p>
                            <p><b>Prix :</b>{hotel.priceFrom}</p>
                        </Card.Text>
                        <Button 
                            variant="primary" 
                            onClick={() => handleReservation(hotel)}
                            disabled={!user.firstName} // Désactiver le bouton si l'utilisateur n'est pas connecté
                        >
                            Réserver & Payer
                        </Button>
                        {/* Afficher ce message si l'utilisateur n'est pas connecté */}
                        {!user.firstName && <small className="d-block text-danger mt-2">Connectez-vous pour réserver</small>}
                    </Card.Body>
                </Card>
            </div>
        ))}
    </div>
);
};
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  updateUser,
  saveRoomData // ajoutez l'action ici pour qu'elle puisse être dispatchée
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomInfo);