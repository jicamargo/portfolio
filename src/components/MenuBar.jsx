import React, { useState } from 'react';
import '../css/MenuBar.css';

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <button id="burguer-menu" onClick={toggleMenu}>
        Menu
      </button>
      <div id="slidemenu" className={isMenuOpen ? 'active' : ''}>
        <a href="#" onClick={closeMenu}>
          Link 1
        </a>
        <a href="#" onClick={closeMenu}>
          Link 2
        </a>
        <a href="#" onClick={closeMenu}>
          Link 3
        </a>
       
      </div>
    </div>
  );
};

export default MenuBar;
