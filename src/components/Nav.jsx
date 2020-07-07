import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';

export default function Nav() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}
