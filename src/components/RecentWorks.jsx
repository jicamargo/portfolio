import React from 'react';
import MainCard from './MainCard';
import SecondaryCard from './SecondaryCard';
import '../css/RecentWorks.css';
import arrWorks from '../data/projects.js';

const RecentWorks = () => {
  return (
    <section id="portfolio" className="recentworks_cnt">
      <div className="RecentWorksSectionTitle">
        <div className="Title_MyRecentWorks">
          <h3>My Recent Works</h3>
        </div>
        <div className="recentworks-line"></div>
      </div>

      <div id="grid_works" className="grid_works">
        {arrWorks.map((work, index) => (
          index === 0 ? (
            <MainCard key={work.id} work={work} />
          ) : (
            <SecondaryCard key={work.id} work={work} />
          )
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
