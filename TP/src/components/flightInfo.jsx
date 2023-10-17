import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const FlightInfo = ({ origin, destination, depart_date, return_date }) => {
  const [flights, setFlights] = useState({});
  const [currency, setCurrency] = useState("");
  const [destinationKey, setDestinationKey] = useState(null);
  const token = "27dc1b903af1a11009cd1701a64ad4bf";

  useEffect(() => {
    axios
      .get(
        `/flight/v1/prices/cheap?origin=${origin}&destination=${destination}&depart_date=${depart_date}&return_date=${return_date}&page=1&currency=CAD&token=${token}`
      )
      .then((res) => {
        if (res.data && res.data.data) {
          setDestinationKey(Object.keys(res.data.data)[0]);
          setFlights(res.data.data);
          if (res.data.currency) {
            setCurrency(res.data.currency);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [origin, destination, depart_date, return_date]);

  if (!destinationKey || !flights[destinationKey]) {
    return <div>Chargement des informations de vol...</div>;
  }

  return (
    <div className="container mt-5">
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
              {flightData.price} {currency}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightInfo;
