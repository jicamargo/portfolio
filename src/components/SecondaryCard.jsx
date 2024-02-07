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
        <div className='img_title_descrip'>
          <div className="cnt_img_card" onClick={handleOpenPopup}>
            <img className="card_cnt_img" src={'../images/'+work.featureImage} alt={work.alternateTextImage} />
          </div>
          <div className="cnt_card_low_part">
            <div className="cnt_info_card" onClick={handleOpenPopup}>
              <div onClick={handleOpenPopup}>
                <div className="Title1_card">{work.name}</div>
              </div>
              <p className="CardDescrip">
                {work.ShortDescrip.length > 70
                  ? `${work.ShortDescrip.slice(0, 70)}...`
                  : work.ShortDescrip
                }
              </p>
            </div>
          </div>
        </div>
        <div>
          <ul className="list_feat">
            {work.technologies.map((tech) => (
              <li className="li_pill" key={tech}>{tech}</li>
              ))}
          </ul>
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
