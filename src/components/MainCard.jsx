import React, { useState } from 'react';
import PopupProject from './PopupProject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'

const MainCard = ({ work }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    document.body.classList.add('no-scroll');
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    document.body.classList.remove('no-scroll');
    setIsPopupOpen(false);
  };

  return (
    <div className="header1" id={work.id}>
      <div className="cnt_img_main_card"  onClick={handleOpenPopup}>
        <img className="main_card_cnt_img" src={`../images/${work.featureImage}`} alt={work.alternateTextImage} />
      </div>
      <div className="cnt_info_main_card">
        <div className="cnt_card_low_part">
          <div onClick={handleOpenPopup}>
            <div className="MainCardTitle Title1_dark">{work.name}</div>
            <div className="MainCardTitle2 Title2_dark">{work.name2}</div>
          </div>
          <p className="MainCardDescrip">{work.ShortDescrip}</p>
          <ul className="list_feat">
            {work.technologies.map((tech) => (
              <li className="li_pill" key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="cnt_btns_card_footer">
            <button className="BtnMainCard SeeProjectBtn project_btn_2 btnCard" onClick={handleOpenPopup}>
              See Project
            </button>
            <a href="#contact" className="link_IconContactMe">
              <FontAwesomeIcon icon={faComment} beat className="IconContactMe" href="#contact" />
            </a>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <PopupProject
          work={work}
          onClose={handleClosePopup}
          onVisitLive={(url) => window.open(url)}
          onVisitSource={(url) => window.open(url)}
        />
      )}
    </div>
  );
};

export default MainCard;
