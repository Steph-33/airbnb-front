import React, { useState, useEffect } from 'react';

export default function SearchForm(props) {
  const [city, setCity] = useState({ name: '', id: '' });

  return (
    <div className="box-form">
      <form className="form-search">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input
          className="inputSearch"
          type="search"
          placeholder="Essayez ex :  Paris"
        />
        <button className="btn-search" type="submit">
          Rechercher
        </button>
      </form>
    </div>
  );
}
