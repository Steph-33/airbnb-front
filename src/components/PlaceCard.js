import React from 'react';

export default function PlaceCard({ props }) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.City.name}</h2>
      <h2>{props.rooms}</h2>
    </div>
  );
}
