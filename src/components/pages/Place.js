import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Place() {
  const [place, setPlace] = useState([]);

  useEffect(() => {
    const id = window.location.href.split('/').reverse()[0];
    const getPlaceById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/places/${id}`
        );
        console.log(response);
        setPlace(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPlaceById();
  }, [place]);
  return (
    <div className="container-place">
      {/* <h1>{place.title}</h1>
      <p className="city">{place.city}</p> */}
      <div className="box-assets">
        <img className="img-summary" src={place.image} alt="assets" />
      </div>
      <div className="box-infos">
        <div className="box-primary">
          <h1>{place.title}</h1>
        </div>
        <div className="box-host">
          <img src={place.avatar} alt="avatar" />
          <h3>Joshua Hello</h3>
        </div>
        <h4>{place.price_by_night} euros/nuits</h4>
        <div className="separator"></div>
        <p>{place.description}</p>
      </div>
    </div>
  );
}
