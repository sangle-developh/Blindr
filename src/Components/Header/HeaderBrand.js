/* eslint-disable react/prop-types */
import React from 'react';
import logo from './bindy-logo-white.png';

function HeaderBrand({ setMenuState, menuActive }) {
  const toggleMobileMenu = () => {
    setMenuState(!menuActive);
  };

  return (
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>

      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        onKeyDown={toggleMobileMenu}
        onClick={toggleMobileMenu}
        tabIndex={0}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  );
}

export default HeaderBrand;
