// NavBar.jsx

import React from 'react';
import '../css/NavBar.css';

function NavBar() {
  return (
    <header>
      <div className="Toolbar">
        <div className="logo">
          <a href="#" className="Mylogo">JIC Software</a>
        </div>
        <div className="menu-pc">
          <a href="#portfolio" className="item-menu">Portfolio</a>
          <a href="#about" className="item-menu">About</a>
          <div className="item-menu-group">
            <a href="#contact" className="item-menu">Contact</a>
            <img src="%PUBLIC_URL%/images/mailicon.png" alt="email icon" className="item-menu-icon" />
          </div>
        </div>
        <nav id="burguer-menu" className="burguer-menu">
          <img src="../assets/burguer_menu_icon.png" alt="burguer menu icon" className="burguer-menu-icon" />
        </nav>
      </div>
      <div className="menu-bar-movil">
        <nav className="slidemenu" id="slidemenu">
          <a className="btn-close-slide-menu">
            <img src="../assets/close-icon.png" alt="Close menu icon" className="btn-close-icon" />
          </a>
          <a href="#portfolio" className="item-menu-mobile">Portfolio</a>
          <a href="#about" className="item-menu-mobile">About</a>
          <a href="#contact" className="item-menu-mobile">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
