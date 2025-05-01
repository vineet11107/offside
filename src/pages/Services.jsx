// // src/components/Services.jsx
// 🧠 How to Manually Redirect on Click:
// In the onClick handler of the button, replace console.log(...) with:

// js
// Copy
// Edit
// window.location.href = "/your-target-url";
// Or use React Router:

// jsx
// Copy
// Edit
// import { useNavigate } from "react-router-dom";
// // ...
// const navigate = useNavigate();
// navigate("/your-target-page");

import React from "react";
import "./Services.css";
import Navbar from "../components/Navbar";

const servicesData = [
  {
    title: "Hourly Booking",
    description: "Book slots for football or cricket by the hour.",
  },
  {
    title: "Tournament Booking",
    description: "Reserve the turf for full-day tournaments and events.",
  },
  {
    title: "Kids U-21 Coaching",
    description: "Skill development programs for under-21 kids.",
  },
];

const handleRedirection = () => {
  const phoneNumber = "918341133103";
  const message = "Hello! I’d like to know more about your turf.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};
const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-section">
        <h2 className="services-title">Our Services</h2>
        <div className="service-cards">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="card-hover-action">
                <button onClick={handleRedirection}>Book Now !!</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
