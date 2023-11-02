import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

import '../css/SocialIconsBar.css';

const SocialIconsBar = ({ location }) => {
  const iconListClassName = location === 'footer' ? 'iconlist_footer' : 'iconlist_main';
  const iconClassName = location === 'footer' ? 'footer-icon socialmediaicon' : 'socialmediaicon';

  return (
    <ul className={iconListClassName}>
      <li><a href="https://github.com/jicamargo" target="_blank" rel="noreferrer" aria-label="Visit my GitHub profile"><FontAwesomeIcon icon={faGithub} className={iconClassName} /></a></li>
      <li><a href="https://linkedin.com/in/jorgecamargog" target="_blank" rel="noreferrer" aria-label="Connect with me on LinkedIn"><FontAwesomeIcon icon={faLinkedin} className={iconClassName} /></a></li>
      <li><a href="https://wellfound.com/u/jicamargo" target="_blank" rel="noreferrer" aria-label="View my AngelList profile"><FontAwesomeIcon icon={faAngellist} className={iconClassName} /></a></li>
      <li><a href="https://twitter.com/ji_camargo" target="_blank" rel="noreferrer" aria-label="Follow me on Twitter"><FontAwesomeIcon icon={faTwitter} className={iconClassName} /></a></li>
      <li><a href="https://medium.com/@jicbec" target="_blank" rel="noreferrer" aria-label="Read my articles on Medium"><FontAwesomeIcon icon={faMedium} className={iconClassName} /></a></li>
    </ul>
  );
};

export default SocialIconsBar;
