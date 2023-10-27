import React, { useState } from 'react';
import PopupProject from './PopupProject';

const SecondaryCard = ({ work }) => {
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
    <div className="sec_card_cnt" id={work.id}>
      <div className="info_card">
        <div className="cnt_img_card">
          <img className="card_cnt_img" src={'../images/'+work.featureImage} alt={work.alternateTextImage} />
        </div>
        <div className="cnt_card_low_part">
          <div className="cnt_info_card">
            <div className="Title1_card">{work.name}</div>
            <div className="Title2_card">{work.name2}</div>
            <p className="CardDescrip">{work.ShortDescrip}</p>
            <ul className="list_feat">
              {work.technologies.map((tech) => (
                <li className="li_pill" key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <button id={`btn-${work.id}`} className="SeeProjectBtn project_btn_2 btnCard" onClick={handleOpenPopup}>
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

export default SecondaryCard;
