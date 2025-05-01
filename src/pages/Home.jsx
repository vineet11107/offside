import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";


function Home() {

  const handleChatButton = () => {
    const phoneNumber = "918341133103";
    const message = "Hello! I’d like to know more about your turf.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="homeBody">
        <Navbar />
      </div>
      <div className="hero-section">
        <img src="/assets/coverimg.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Offside</h1>
          <p>Book your game. Rule the turf.</p>
        </div>
      </div>

      <section className="map-section">
        <h2>📍 Visit Us</h2>
        <div className="map-container">
          <iframe
            title="Offside Football Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.6081622489924!2d78.54105847516806!3d17.526208583384832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ba224c1ca27%3A0x8676e1ac9794d13e!2sOFFSIDE%20Football%20Academy!5e0!3m2!1sen!2sin!4v1745218666152!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <div className="chat-widget">
        <p>💬 Need help booking?</p>
        <button onClick={handleChatButton}>Chat with us</button>
      </div>
    </>
  );
}

export default Home;