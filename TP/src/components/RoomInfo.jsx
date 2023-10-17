import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const RoomInfo = ({ city }) => {
  const [hotels, setHotels] = useState([]);

  const token = "";

  useEffect(() => {
    axios
      .get(
        `/hotel/api/v2/lookup.json?query=${city}&lang=fr&lookFor=both&limit=100&token=${token}`
      )
      .then((res) => {
        setHotels(res.data.results.hotels.filter(hotel => hotel.locationName.includes("Canada")));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  return hotels.map((hotel, key) => (
    <div key={key} className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{hotel.fullName}</h5>
        <p className="card-text">{hotel.locationName}</p>
      </div>
      <hr />
    </div>
  ));
};

export default RoomInfo;
