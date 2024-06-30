import React, { useState } from 'react';
import './DropdownCard.css';

const DropdownCard = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-card">
      <div className="dropdown-card-header" onClick={toggleOpen}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="dropdown-card-content">{children}</div>}
    </div>
  );
};

export default DropdownCard;