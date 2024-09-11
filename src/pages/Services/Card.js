import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ image, title, description}) => {
  return (
    <div className="crad">
      <img src={image} alt="Card" className="crad-image" />
      <div className="crad-content">
        <h2 className="crad-title">{title}</h2>
        <p className="crad-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
