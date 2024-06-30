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
        <span id="button">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p class="description">{description}</p>}
    </div>
  );
};

export default ProjectCard;