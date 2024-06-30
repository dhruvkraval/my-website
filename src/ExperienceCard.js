import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ company, positions }) => {
  return (
    <div className="experience-card">
      {positions.map((position, index) => (
        <div key={index} className="position">
          <div className="position-header">
            <h4><i>{position.title}</i></h4>
            <span>{position.dateRange}</span>
          </div>
          <p>{position.description}</p>
          <div className="skills">
            {position.skills.map((skill, idx) => (
              <span className="skill" key={idx}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;