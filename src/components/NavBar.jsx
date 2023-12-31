// NavBar.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../css/NavBar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    document.body.classList.add('no-scroll');
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    document.body.classList.remove('no-scroll');
    setIsMenuOpen(false);
  };

  return (
    <header>

      <div className="Toolbar">
        <div className="logo">
          <a href="#home" className="Mylogo">JIC Software</a>
        </div>
        <div className="menu-pc">
          <a href="#home" className="item-menu">Home</a>
          <a href="#portfolio" className="item-menu">Projects</a>
          <a href="#about" className="item-menu">About</a>
          <a href="#contact" className="item-menu" aria-label="Go to cantact Section">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        <button id="burguer-menu" className="burguer-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} beatFade className='burguer-menu-icon' />
        </button>

      </div>
       {/* overlay to prevent scrolling and click when menu is open */}
      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu} />
      <nav id="slidemenu" className={isMenuOpen ? 'active' : ''}>
        <button className="btn-close-slide-menu btn-close-icon" onClick={closeMenu} aria-label="Close menu">
          <FontAwesomeIcon icon={faXmark} beatFade />
        </button>
        <a href="#home" className="item-menu-mobile"  onClick={closeMenu}>Home</a>
        <a href="#portfolio" className="item-menu-mobile"  onClick={closeMenu}>Portfolio</a>
        <a href="#about" className="item-menu-mobile"  onClick={closeMenu}>About</a>
        <a href="#contact" className="item-menu-mobile"  onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;
