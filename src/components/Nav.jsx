import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Place from './pages/Place';
import Register from './pages/Register';
import Signin from './pages/Signin';
import Portal from './pages/Portal';

export default function Nav() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">
          <img
            className="logo"
            src="/assets/images/logo/airbnb_logo.png"
            alt="logo"
          />
        </NavLink>
        <div className="box-links">
          <NavLink className="link" to="/portal">
            <img
              className="portal"
              src="/assets/images/icons/portal.png"
              alt="icon"
            />
          </NavLink>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/place/:id" component={Place} />
        <Route exact path="/portal" component={Portal} />

        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
