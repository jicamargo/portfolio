import React from 'react';
import PersonalPresentation from './Presentation';
import SocialIconsBar from './SocialIconsBar';
import '../css/Hero.css';

const Hero = () => {
  return (
    <section className="main-frame">
      <div className="background-image">
        <div className="content1">
          <PersonalPresentation />
          <SocialIconsBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
