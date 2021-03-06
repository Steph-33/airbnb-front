import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Signin() {
  const [signin, setSignin] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
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
        setSignin({ email: '', password: '' });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('firstname', response.data.user.firstname);
        localStorage.setItem('lastname', response.data.user.lastname);
        localStorage.setItem('role', response.data.user.role);
        setToDashboard(true);
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
        <img src="/assets/images/logo/logo-complete.png" alt="logo" />
        {error ? (
          <div className="box-error">
            <h4>{error.error}</h4>
          </div>
        ) : (
          ''
        )}
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
