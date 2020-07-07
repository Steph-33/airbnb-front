import React from 'react';

export default function PlaceCard({ place }) {
  return (
    <div>
      <h1>{place.title}</h1>
      <h2>{place.City.name}</h2>
      <h2>{place.rooms}</h2>
    </div>
  );
}
