import React from 'react';

export default function PlaceCard({ place }) {
  return (
    <div className="box-place">
      <a href={`/place/${place.id}`}>
        <img src={place.image} alt="appart" />
        <div className="place-infos">
          <h2 className="title">{place.title}</h2>
          <h2 className="description">{place.description}</h2>
          <h2 className="price">
            <span>{place.price_by_night}€</span> / nuits
          </h2>
        </div>
      </a>
    </div>
  );
}
