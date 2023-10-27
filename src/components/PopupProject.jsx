import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGears, faXmark } from '@fortawesome/free-solid-svg-icons';


import '../css/PopupProject.css';

const PopupProject = ({ work, onClose, onVisitLive, onVisitSource }) => {
  return (
    <div className="popup-container">
      <div className="cntInfoPopup">
        <button className="btnClosePopup" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h1 className="PopupTitle1 Title2_dark">{work.name}</h1>
        <ul className="list_feat_popup">
          {work.technologies.map((tech) => (
            <li className="li_btn_popup" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        <div className="popup-columns">
          <div className="popup-col1 popupImgCnt">
            <img className="PopupImg" src={`../images/${work.featureImage2}`} alt={work.alternateTextImage} />
          </div>
          <div className="popup-col2">
            <div className="PopupDescrip">{work.LongDescrip}</div>
            <ul className="cntBtnPopup">
              <li className="SeeProjectBtn BtnPopup" onClick={() => onVisitLive(work.liveVersion)}>
                <div>Live Demo</div>
                <FontAwesomeIcon icon={faGears} className="popup-icon-btn" alt="Live demo icon"/>
              </li>
              <li className="SeeProjectBtn BtnPopup" onClick={() => onVisitSource(work.source)}>
                <div>Git Source</div>
                <FontAwesomeIcon icon={faGithub} className="popup-icon-btn" alt="Source code icon"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupProject;
