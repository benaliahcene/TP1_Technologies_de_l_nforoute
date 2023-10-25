import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { updateUser } from "../actions/userActions";
import { connect } from "react-redux";
import { saveVolData } from "../actions/volActions";

class FlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: {},
      currency: "",
      destinationKey: null,
      confirmationMessage: "",
      errorMessage: "",
    };
  }

  componentDidMount() {
    const { origin, destination, depart_date, return_date } = this.props;
    const token = "27dc1b903af1a11009cd1701a64ad4bf";
    axios
      .get(
        `/flight/v1/prices/cheap?origin=${origin}&destination=${destination}&depart_date=${depart_date}&return_date=${return_date}&page=1&currency=CAD&token=${token}&limit=100`
      )
      .then((res) => {
        if (res.data && res.data.data) {
          this.setState({
            destinationKey: Object.keys(res.data.data)[0],
            flights: res.data.data,
            currency: res.data.currency,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleReservationClick = (flightData) => {
    const user = this.props.user;
    if (user.solde >= flightData.price) {
      const newSolde = user.solde - flightData.price;
      this.props.updateUser({
        ...user,
        solde: newSolde,
      });
      this.setState({
        confirmationMessage: `Vous avez réservé un vol avec la compagnie aérienne ${flightData.airline}.`,
      });
      setTimeout(() => this.setState({ confirmationMessage: "" }), 3000);

      const flightInfo = {
        AC: flightData.airline,
        From: this.props.origin,
        To: this.props.destination,
        Number_flight: flightData.flight_number,
        Price: flightData.price,
      };

      this.props.saveVolData(flightInfo);
      console.log("test vol save", flightInfo);
    } else {
      this.setState({
        errorMessage:
          "Votre solde est insuffisant. Veuillez recharger votre compte.",
      });
      setTimeout(() => this.setState({ errorMessage: "" }), 3000);
    }
  };

  render() {
    const {
      flights,
      destinationKey,
      confirmationMessage,
      errorMessage,
      currency,
    } = this.state;

    if (!destinationKey || !flights[destinationKey]) {
      return <div>Chargement des informations de vol...</div>;
    }

    return (
      <div className="container mt-5">
        {confirmationMessage && (
          <div className="alert alert-success">{confirmationMessage}</div>
        )}
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        {Object.values(flights[destinationKey]).map((flightData) => (
          <div key={flightData.departure_at} className="card mb-3">
            <div className="card-header">Informations de vol</div>
            <div className="card-body">
              <p>
                <b>Départ:</b>{" "}
                {flightData.departure_at &&
                  new Date(flightData.departure_at).toLocaleDateString()}{" "}
                {flightData.departure_at &&
                  new Date(flightData.departure_at).toLocaleTimeString()}
              </p>
              <p>
                <b>Retour:</b>{" "}
                {flightData.return_at &&
                  new Date(flightData.return_at).toLocaleDateString()}{" "}
                {flightData.return_at &&
                  new Date(flightData.return_at).toLocaleTimeString()}
              </p>
              <p>
                <b>Compagnie aérienne:</b> {flightData.airline}
              </p>
              <p>
                <b>Numéro de vol:</b> {flightData.flight_number}
              </p>
              <p className="font-weight-bold">
                <b>Prix:</b> {flightData.price} {currency}
              </p>

              <Button
                variant="primary"
                onClick={() => this.handleReservationClick(flightData)}
                disabled={!this.props.user.firstName} // Désactiver le bouton si l'utilisateur n'est pas connecté
              >
                Réserver & Payer
              </Button>
              {/* Afficher ce message si l'utilisateur n'est pas connecté */}
              {!this.props.user.firstName && (
                <small className="d-block text-danger mt-3">
                  Connectez-vous pour réserver
                </small>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  updateUser,
  saveVolData,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightInfo);
