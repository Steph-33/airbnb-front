import React from 'react';

export default function Portal() {
  return (
    <div className="container-portal">
      <div className="side-left"></div>
      <div className="side-right">
        <img src="/assets/images/logo/logo-complete.png" alt="logo" />
        <div className="box-buttons">
          <a href="/signin">
            <button className="btn-style">Connexion</button>
          </a>
          <a href="/register">
            <button className="btn-noStyle">Inscription</button>
          </a>
        </div>
      </div>
    </div>
  );
}
