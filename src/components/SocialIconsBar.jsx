import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

import '../css/SocialIconsBar.css';

const SocialIconsBar = () => {
  return (
    <ul className="iconlist_main">
      <li><a href="https://github.com/jicamargo"><FontAwesomeIcon icon={faGithub} className="socialmediaicon"/></a></li>
      <li><a href="https://linkedin.com/in/jorgecamargog"><FontAwesomeIcon icon={faLinkedin} className="socialmediaicon"/></a></li>
      <li><a href="https://wellfound.com/u/jicamargo"><FontAwesomeIcon icon={faAngellist} className="socialmediaicon"/></a></li>
      <li><a href="https://twitter.com/ji_camargo"><FontAwesomeIcon icon={faTwitter} className="socialmediaicon"/></a></li>
      <li><a href="https://medium.com/@jicbec"><FontAwesomeIcon icon={faMedium} className="socialmediaicon"/></a></li>
    </ul>
  );
};

export default SocialIconsBar;
