import React from 'react';

export default function SearchForm() {
  return (
    <div className="box-form">
      <form>
        <div className="box-input">
          <label>ADRESSE</label>
          <input type="search" placeholder="Où Allez-vous?" />
        </div>
        <div className="box-input">
          <label>ARRIVÉE</label>
          <input type="DATE" placeholder="Ajoutez des dates" />
        </div>
        <div className="box-input">
          <label>DÉPART</label>
          <input type="DATE" placeholder="Ajoutez des dates" />
        </div>
        <div className="box-input">
          <label>VOYAGEURS</label>
          <select>
            <option>Ajouter des voyageurs</option>
            <option selected="selected">1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
        <button>Rechercher</button>
      </form>
    </div>
  );
}
