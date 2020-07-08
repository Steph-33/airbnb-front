import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';

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
          <h5>Aide</h5>
          <button>Inscription</button>
          <button>Connexion</button>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}
