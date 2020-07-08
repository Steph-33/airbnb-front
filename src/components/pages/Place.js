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
        // console.log(response);
        setPlace(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPlaceById();
  }, [place]);
  return (
    <div>
      <h1>{place.title}</h1>
    </div>
  );
}
