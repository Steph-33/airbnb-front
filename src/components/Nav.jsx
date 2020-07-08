import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Place from './pages/Place';

export default function Nav() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">
          <img
            className="logo"
            src="/assets/images/logo/airbnb-logo.png"
            alt="logo"
          />
        </NavLink>
        <div className="box-links">
          <button className="btn-noStyle">Aide</button>
          <button className="btn-noStyle">Connexion</button>
          <button className="btn-style">Inscription</button>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route exact path="/place/:id" component={Place} />
    </BrowserRouter>
  );
}
