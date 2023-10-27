import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../css/Skills.css'; // Asegúrate de importar tu archivo CSS

const Skills = () => {
  return (
    <section className="skills_cnt">
      <span className="line_div_dark"></span>
      <ul className="skill_col">
        <li className="ul_skill">
          <div className="skills_col_title">
            <FontAwesomeIcon icon={faStar} beatFade />
            Language
          </div>
          <ul>
            <li className="li_skills">JavaScript</li>
            <li className="li_skills">Ruby</li>
            <li className="li_skills">HTML</li>
            <li className="li_skills">CSS</li>
          </ul>
        </li>
        <li className="ul_skill">
          <div className="skills_col_title">
            <FontAwesomeIcon icon={faStar} beatFade />
            Frameworks
          </div>
          <ul>
            <li className="li_skills">React.js</li>
            <li className="li_skills">Ruby on Rails</li>
            <li className="li_skills">RSpec</li>
            <li className="li_skills">CapyBara</li>
          </ul>
        </li>
        <li className="ul_skill">
          <div className="skills_col_title">
            <FontAwesomeIcon icon={faStar} beatFade />
            Skills
          </div>
          <ul>
            <li className="li_skills">Database Management</li>
            <li className="li_skills">Version Control</li>
            <li className="li_skills">API Design</li>
            <li className="li_skills">Web Development</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
