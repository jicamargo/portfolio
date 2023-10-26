import React, { useState } from 'react';
import PopupProject from './PopupProject';

const MainCard = ({ work }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="header1" id={work.id}>
      <div className="cnt_img_main_card">
        <img className="main_card_cnt_img" src={`../images/${work.featureImage}`} alt={work.alternateTextImage} />
      </div>
      <div className="cnt_info_main_card">
        <div className="cnt_card_low_part">
          <div className="MainCardTitle Title2_dark">{work.name}</div>
          <p className="MainCardDescrip">{work.ShortDescrip}</p>
          <ul className="list_feat">
            {work.technologies.map((tech) => (
              <li className="li_pill" key={tech}>{tech}</li>
            ))}
          </ul>
          <button className="SeeProjectBtn project_btn_2 btnCard" onClick={handleOpenPopup}>
            See Project
          </button>
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
