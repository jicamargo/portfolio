import React from 'react';
import SocialIconsBar from './SocialIconsBar'; 

import '../css/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <SocialIconsBar location={"footer"} />
      <div className='footer-text'>
        JIC Software | All Rights reserved | 2023
      </div>
      <div className="thick-line"></div>
      <div className="final-line"></div>
    </footer>
  );
};

export default Footer;
