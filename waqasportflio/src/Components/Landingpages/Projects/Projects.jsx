import React from 'react';
import './Projects.css';

// Local images import
import golddigger from '../../Images/golddigger.png'
import portfliowebsite from '../../Images/portfliowebsite.png'
import RaGbot from '../../Images/RaGbot.png'

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-title">
        <h2>Featured Projects</h2>
        <p>Check out some of my recent work</p>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <img src={golddigger} alt="golddigger.png" />
          <div className="project-info">
            <h3>Gold Digger</h3>
            <p>An interactive gold valuation and trading web application built using HTML, CSS, and JavaScript.</p>
            <a 
              href="#!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-orange btn-sm"
            >
              View Demo <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={portfliowebsite} alt="portfliowebsite.png" />
          <div className="project-info">
            <h3>Portoflio Website</h3>
            <p>A modern, responsive personal developer portfolio created with React.js to showcase skills and projects.</p>
            <a 
              href="#!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-orange btn-sm"
            >
              View Demo <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={RaGbot} alt="RaGbot.png" />
          <div className="project-info">
            <h3>RAG CHAT BOT</h3>
            <p>An AI-powered customer support chatbot built using n8n workflows for automated dynamic responses.</p>
            <a 
              href="#!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-orange btn-sm"
            >
              View Demo <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}