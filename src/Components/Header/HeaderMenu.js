import React from 'react';
import SigninButton from './SigninButton';

function NavBarMenu({ menuActive }) {
  return (
    <div className={`navbar-menu ${menuActive ? 'is-active' : ''}`}>
      <a className="navbar-item">Home</a>

      <a className="navbar-item">FAQs</a>
      <SigninButton />
    </div>
  );
}

export default NavBarMenu;
