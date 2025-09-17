import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAArklEQVR4AWMQ4H8YwOYz///wPIT6D+kgN0CdD/RMtw3ihFCLfD1Jh/Sq4F0B0IoQiGGSc8N3yQ96GEMAMQGsTklKxihgog34RACzUkwkwRgBpDTEsIhpIGDNDG2QDAAKoaDEUMTZCBdA3pIjKJkRABMwyIagI4RJNCNxHyWEDoGgqB+RRCBJRjGlElqBRFgOSph7YioEBA6oIAF7Fq1l/An1UwAAABJRU5ErkJggg==";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={"https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg"} alt="BMW Logo" className="navbar-logo-image" />
          BMW
        </NavLink>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              activeclassname="active"
              exact="true"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              activeclassname="active"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              activeclassname="active"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
