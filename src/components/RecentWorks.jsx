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
          <h3>Some of my projects</h3>
        </div>
        <div className="recentworks-line"></div>
      </div>

      <div id="grid_works" className="grid_works">
        {arrWorks
          .sort((a,b) => (a.order || 99) - (b.order || 99))
          .map((work, index) => (
          work.highlight !== undefined && work.highlight === true ? (
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
