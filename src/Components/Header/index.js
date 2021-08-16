import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './header.css';
import HeaderBrand from './HeaderBrand';
import HeaderMenu from './HeaderMenu';

function Header() {
  const [menuActive, setMenuState] = useState(false);

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <HeaderBrand setMenuState={setMenuState} menuActive={menuActive} />
        <HeaderMenu menuActive={menuActive} />
      </nav>
    </div>
  );
}

export default Header;
