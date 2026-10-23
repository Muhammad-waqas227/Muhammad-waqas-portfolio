import React from 'react';
import './Herosection.css'
import waqas from '../../Images/waqas.png';

export default function Herosection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, I'm Muhammad Waqas<span className="wave">👋</span>
        </h1>
        <h2>Frontend Developer & AI Automation Specialist</h2>
        <p>
          I build modern, fast websites and automate businesses with AI Agent, n8n & Chatbots. I help brands turn ideas into smart digital reality.
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn btn-orange">
            Contact Me <i className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn btn-outline">
            <i className="fas fa-download" /> Download CV
          </button>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <h3>20+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-item">
            <h3>1+</h3>
            <p>Years</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Clients</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-wrapper">
          <img src={waqas} alt="Muhammad Waqas" />
        </div>
      </div>
    </section>
  );
}