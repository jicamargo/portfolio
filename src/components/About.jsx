import React from 'react';
import Skills from './Skills';
import '../css/About.css';

const About = () => {
  return (
    <section id="about" className="about_cnt">
      <div className="about_info">
        <div className="Tittle_about big-title">About me</div>
        <p className="DescripAbout">
        System Engineer and Full Stack Web Developer with experience in Ruby and JavaScript Libraries, 
        Frameworks and Databases. 6+ years of industry experience, including mentoring 5+ junior developers 
        to achieve concrete goals on a strict deadline.
        Excellent problem-solving skills, team worker and a
        confident communicator
        </p>
        <a
          className="SeeProjectBtn BtnClass resume_btn"
          href="https://drive.google.com/file/d/1iJGfYROmAU5Q9YfMw8DrrDsDpaAkDua7/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Get My Resume
        </a>
      </div>
      <Skills />
    </section>
  );
};

export default About;
