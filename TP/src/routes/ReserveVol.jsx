import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import ReserveVol from "../components/ReserveVol";
import FlightInfo from '../components/flightInfo';

const MyComponent = () => {
  const [flightSearchParams, setFlightSearchParams] = useState(null);

  const handleSearch = (params) => {
    setFlightSearchParams(params);
  };

  return (
    <div>
      <Card className="text-center">
        <Card.Header>
          <h2>Des millions de vols pas chers. Une simple recherche.</h2>
        </Card.Header>
        <Card.Body>
          <ReserveVol onSearch={handleSearch} />
          {flightSearchParams && <FlightInfo {...flightSearchParams} />}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyComponent;
