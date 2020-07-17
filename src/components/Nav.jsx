import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Place from './pages/Place';
import Register from './pages/Register';
import Signin from './pages/Signin';
import Portal from './pages/Portal';

export default function Nav() {
  const [firstname, setFirstname] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const getUserSession = () => {
    const firstname = localStorage.getItem('firstname');
    setFirstname(firstname);
  };

  useEffect(() => {
    getUserSession();
    setRefresh(true);
    if (refresh) {
      window.location = '/';
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setRefresh(true);
    if (refresh) {
      window.location = '/';
    }
  };
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
          {firstname ? (
            <div className="box-session">
              <p>{firstname}, </p>
              <i onClick={logout} class="fa fa-sign-out" aria-hidden="true"></i>
            </div>
          ) : (
            <NavLink className="link" to="/portal">
              <img
                className="portal"
                src="/assets/images/icons/portal.png"
                alt="icon"
              />
            </NavLink>
          )}
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
