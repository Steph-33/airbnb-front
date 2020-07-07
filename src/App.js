import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceCard from './components/PlaceCard';
import './App.scss';

function App() {
  const [allPlaces, setAllPlaces] = useState([]);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/places');
        // console.log(response);
        setAllPlaces(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPlaces();
  }, [allPlaces]);
  return (
    <div className="App">
      {allPlaces.map((place, index) => (
        <PlaceCard place={place} key={index} />
      ))}
    </div>
  );
}

export default App;
