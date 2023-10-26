import React from 'react';

const MainCard = ({ work }) => {
  return (
    <div className="header1" id={work.id}>
      <div className="cnt_img_main_card">
        <img className="main_card_cnt_img" src={'../images/'+work.featureImage} alt={work.alternateTextImage} />
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
          <a id={`btn-${work.id}`} className="SeeProjectBtn project_btn_2 btnCard" href="#">
            See Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
