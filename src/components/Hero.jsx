import React from 'react';
import PersonalPresentation from './Presentation';
import SocialIconsBar from './SocialIconsBar';
import '../css/Hero.css';

const Hero = () => {
  const [zoomed, setZoomed] = React.useState(false);

  const handleZoom = () => {
    setZoomed(!zoomed);
  }

  return (
    <section id="home" className="main-frame" >
      <div className={`background-image ${zoomed ? 'zoomed' : ''}`} onMouseEnter={handleZoom} onMouseLeave={handleZoom}>
        <div className="content1">
          <PersonalPresentation />
          <SocialIconsBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
