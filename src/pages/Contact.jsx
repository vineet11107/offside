import React from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />
      <div class="contact-container">
        <h2 class="contact-title">Get in Touch</h2>
        <p class="contact-subtitle">
          Have a question or just want to say hello? We'd love to hear from you.
        </p>

        <div class="contact-content">
          <form class="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div class="contact-info">
            <h3>Contact Info</h3>
            <p>
              <strong>Email:</strong> contact@example.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Location:</strong> Bangalore, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
