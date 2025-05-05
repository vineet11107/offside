// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {/* Hamburger Icon */}
      {!drawerOpen && (
        <div className="hamburger" onClick={toggleDrawer}>
          &#9776;
        </div>
      )}

      {/* Overlay */}
      {drawerOpen && <div className="overlay" onClick={closeDrawer}></div>}

      {/* Side Drawer */}
      <nav className={`sidebar ${drawerOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeDrawer}>
          &times;
        </button>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeDrawer}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeDrawer}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={closeDrawer}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeDrawer}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Navbar */}
      <nav className="navbar">
        <img src="/assets/logo_Offside.jpeg" alt="Logo" className="logo" />
        <ul className="nav-links desktop">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
