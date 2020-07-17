import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Signin() {
  const [signin, setSignin] = useState({ email: '', password: '' });
  const [error, setError] = useState({});
  const [toDashboard, setToDashboard] = useState(false);
  const handleChange = (event) => {
    setSignin({ ...signin, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/signin', signin)
      .then((response) => {
        console.log(response);
        setToDashboard(true);
        setSignin({ email: '', password: '' });
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
    console.log(error);
  };

  return (
    <div
      className="container-signin"
      method="POST"
      action="/signin"
      onSubmit={handleSubmit}
    >
      {toDashboard ? <Redirect to="/" /> : null}
      <div className="side-left"></div>
      <div className="side-right">
        {error ? <h1>{error.error}</h1> : ''}
        <img src="/assets/images/logo/logo-complete.png" alt="logo" />
        <form className="form-signin">
          <input
            className="input-signin"
            type="email"
            name="email"
            placeholder="Tapez votre adresse-email..."
            value={signin.email}
            onChange={handleChange}
            required
          />
          <input
            className="input-signin"
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={signin.password}
            onChange={handleChange}
          />
          <button className="btn-style" type="submit">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}
