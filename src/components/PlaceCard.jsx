import React, { useEffect, useState } from 'react';
import '../sass/partials/_placeCard.scss';
export default function PlaceCard({ place }) {
  return (
    <div className="box-place">
      <img src={place.image} alt="appart" />
      <div className="place-infos">
        <h2>{place.title}</h2>
        <h2>{place.City.name}</h2>
        <h2>
          <span>{place.price_by_night} €</span> / nuits
        </h2>
      </div>
    </div>
  );
}
