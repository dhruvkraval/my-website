import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="project-card">
      <div className="project-header" onClick={toggleOpen}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p>{description}</p>}
    </div>
  );
};

export default ProjectCard;