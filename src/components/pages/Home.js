import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceCard from '../PlaceCard';
import SearchForm from '../SearchForm';

export default function Home() {
  const [allPlaces, setAllPlaces] = useState([]);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/places');
        // console.log(response);
        setAllPlaces(response.data.reverse());
      } catch (error) {
        console.error(error);
      }
    };
    getPlaces();
  }, [allPlaces]);
  return (
    <div class="container">
      <SearchForm />
      <div class="heading">
        <p>+ de {allPlaces.length} séjours</p>
        <h1>Logements : les plus récents</h1>
      </div>
      <div className="container-places">
        {allPlaces.map((place, index) => (
          <PlaceCard place={place} key={index} />
        ))}
      </div>
    </div>
  );
}
