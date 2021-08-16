import React, { useState } from 'react';

function Header() {
  const [menuActive, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!menuActive);
  };

  return (
    <div>
      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Logo" />
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

        <div className={`navbar-menu ${menuActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">FAQs</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-link">
                  <strong>Sign in</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
