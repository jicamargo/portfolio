import React from 'react';

const SecondaryCard = ({ work }) => {
  return (
    <div className="sec_card_cnt" id={work.id}>
      <div className="info_card">
        <div className="cnt_img_card">
          <img className="card_cnt_img" src={'../images/'+work.featureImage} alt={work.alternateTextImage} />
        </div>
        <div className="cnt_card_low_part">
          <div className="cnt_info_card">
            <h1 className="Title1_card">{work.name}</h1>
            <h2 className="Title2_card">{work.name2}</h2>
            <p className="CardDescrip">{work.ShortDescrip}</p>
            <ul className="list_feat">
              {work.technologies.map((tech) => (
                <li className="li_pill" key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <a id={`btn-${work.id}`} className="SeeProjectBtn project_btn_2 btnCard" href="#">
            See Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCard;
