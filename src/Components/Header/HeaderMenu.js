import React from 'react';
import { Link } from 'react-router-dom';
import SigninButton from './SigninButton';
import SignupButton from './SignupButton';

function NavBarMenu({ menuActive }) {
  return (
    <div className={`navbar-menu ${menuActive ? 'is-active' : ''}`}>
      <div style={{ display: 'flex', 'flex-grow': '1' }}>
        <Link to="">
          <a className="navbar-item">Home</a>
        </Link>
        <Link to="faq">
          <a className="navbar-item">FAQs</a>
        </Link>
        <Link to="account">
          <a className="navbar-item">Account</a>
        </Link>
      </div>
      <div style={{ display: 'flex' }}>
        <Link to="signup">
          <SignupButton />
        </Link>
        <Link to="signin">
          <SigninButton />
        </Link>
      </div>
    </div>
  );
}

export default NavBarMenu;
