import "./Footer.css";
import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm";

function Footer() {
  const [showForm, setShowForm] = useState(false);
  console.log("Footer rendered");
  return (
    <>
      {/* <div className="footer1">
        <div className="areas box1">
          <img src="/assets/logo_Offside.jpeg" alt="logo" className="footer-logo"/>
          <p className="name">OFFSIDE <span>FOOTBALL ACADEMY</span></p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            deleniti nihil placeat ea molestiae sapiente aliquam laborum eos
            alias nemo asperiores doloribus ratione, illo cupiditate nisi odit
            quaerat expedita! Numquam, itaque odio, sit porro ducimus error
            labore, ea dignissimos consequuntur quae magni voluptates sunt qui!
            Molestiae totam quaerat delectus odit.
          </p>
        </div>
        <div className="areas box2"></div>
        <div className="areas box3"></div>
        <div className="areas box3"></div>
      </div> */}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column about">
            <img
              src="/assets/logo_Offside.jpeg"
              alt="Logo"
              className="footer-logo"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>

          <div className="footer-column links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="footer-column contact">
            <h4>Contact Info</h4>
            <p>📍 Offside, Gruhatara, Kowkoor</p>
            <br />
            <p>📞 +91 8341133103</p>
            <br />
            <p>✉️ offside@test.com</p>
          </div>

          <div className="footer-column office">
            <h4>Explore more !</h4>
            <p>
              <a
                href="https://www.instagram.com/playatoffside?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                📸 Follow us !
              </a>
            </p>
            <br />
            <p className="rating">
              <a
                href="https://www.google.com/maps/place/OFFSIDE+Football+Academy/@17.5262086,78.5410585,17z/data=!4m8!3m7!1s0x3bcb9ba224c1ca27:0x8676e1ac9794d13e!8m2!3d17.5262086!4d78.5436334!9m1!1b1!16s%2Fg%2F11smqxplz4?hl=en&entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                target="_blank"
              >
                Rate us - [click here]
              </a>
            </p>
            <br />
            <div className="App">
              <button
                className="feedback-btn"
                onClick={() => setShowForm(true)}
              >
                Feedback Form
              </button>

              {showForm && <FeedbackForm onClose={() => setShowForm(false)} />}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
