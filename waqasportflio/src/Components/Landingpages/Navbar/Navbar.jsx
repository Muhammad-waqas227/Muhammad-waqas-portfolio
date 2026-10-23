import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        Muhammad<span>Waqas</span>
      </div>

      {/* Menu Links */}
      <nav>
        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Me</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          
          {/* Contact Me Button inside menu for mobile */}
          <li>
            <a href="#contact" className="btn btn-orange nav-btn" onClick={() => setIsOpen(false)}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger Toggle Button */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}