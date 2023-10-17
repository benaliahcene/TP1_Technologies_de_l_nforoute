import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import ReserveRoom from "../components/ReserveRoom";
import RoomInfo from "../components/RoomInfo";

const MyComponent = () => {
  const [city, setCity] = useState("");

  const handleCitySearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div>
      <Card className="text-center">
        <Card.Header> <h2>Trouvez la chambre de vos rêves dès aujourd'hui.</h2></Card.Header>
        <Card.Body>
          <ReserveRoom onCitySearch={handleCitySearch} />
          {city && <RoomInfo city={city} />}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyComponent;
