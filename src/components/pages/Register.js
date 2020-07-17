import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Register() {
  const [signup, setSignup] = useState({
    lastname: '',
    firstname: '',
    email: '',
    role: '',
    password: '',
    avatar: '',
  });
  const [error, setError] = useState(null);
  const [toDashboard, setToDashboard] = useState(false);

  const handleChange = (event) => {
    setSignup({ ...signup, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/signup', signup)
      .then((response) => {
        console.log('#response', response);
        setSignup({
          lastname: '',
          firstname: '',
          email: '',
          role: '',
          password: '',
          avatar: '',
        });
        console.log('hello');
        localStorage.setItem('firstname', signup.firstname);
        localStorage.setItem('lastname', signup.lastname);
        localStorage.setItem('role', signup.role);
        localStorage.setItem('role', signup.avatar);
        setToDashboard(true);
        console.log(localStorage.getItem('firstname'));
      })
      .catch((error) => {
        console.log('#error', error.response);
        // setError(error.response.data);
      });
  };

  return (
    <div
      className="container-signin"
      method="POST"
      action="/signup"
      onSubmit={handleSubmit}
    >
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
          {toDashboard ? <Redirect to="/" /> : null}
          <input
            className="input-signin"
            type="text"
            name="lastname"
            placeholder="Prénom"
            value={signup.lastname}
            onChange={handleChange}
            required
          />
          <input
            className="input-signin"
            type="text"
            name="firstname"
            placeholder="Nom"
            value={signup.firstname}
            onChange={handleChange}
            required
          />
          <input
            className="input-signin"
            type="email"
            name="email"
            placeholder="Votre adresse e-mail"
            value={signup.email}
            onChange={handleChange}
          />
          {/* <div className="box-radios">
            <div className="radio">
              <input type="radio" name="role" value="host" />
              <label>Hôte</label>
            </div>
            <div className="radio">
              <input type="radio" name="role" value="tourist" />
              <label>Touriste</label>
            </div>
          </div> */}
          <select name="role" value={signup.role} onChange={handleChange}>
            <option value="...">...</option>
            <option value="host">Hôte</option>
            <option value="tourist">Touriste</option>
          </select>
          <input
            className="input-signin"
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            value={signup.password}
            onChange={handleChange}
            required
          />
          <input
            className="input-signin"
            type="text"
            name="avatar"
            placeholder="https://votre_avatar_jpeg.com"
            value={signup.avatar}
            onChange={handleChange}
            required
          />
          {/* <input
            className="input-signin"
            type="password"
            name="passwordCheck"
            placeholder="Retapez votre mot de passe"
            value={signup.email}
            onChange={handleChange}
            required
          /> */}
          <button className="btn-style" type="submit">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}
