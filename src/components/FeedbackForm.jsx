// components/FeedbackForm.jsx
import React from "react";
import "./FeedbackForm.css";

const FeedbackForm = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="feedback-form">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Send Us Your Feedback</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Feedback" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
