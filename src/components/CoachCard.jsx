// src/components/CoachCard.jsx
import React from "react";

const CoachCard = ({ image, name, designation }) => {
  return (
    <div className="coach-card">
      <img src={image} alt={name} className="coach-img" />
      <h3>{name}</h3>
      <p>{designation}</p>
    </div>
  );
};

export default CoachCard;
