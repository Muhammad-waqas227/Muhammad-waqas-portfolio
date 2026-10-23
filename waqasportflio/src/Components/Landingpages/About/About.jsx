import React from 'react';
import './About.css';
import about5 from '../../Images/aboutimg5.png';


// React Icons Import
import { FaDesktop, FaServer, FaRobot, FaTools } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-images">
          <div className="grid-2x2">
            <img src={about5} alt="About 5" />
          
          </div>
</div>
        <div className="about-content">
          <h2>About Me</h2>
          <h3>Frontend Developer & AI Automation Specialist</h3>
          <p>
            I build modern, fast websites and automate businesses with AI Agent, n8n & Chatbots. I help brands turn ideas into smart digital reality.
          </p>

          <div className="skills-categories-grid">
            <div className="category-box">
              <FaDesktop />
              <div>
                <h4>Frontend</h4>
                <p>React.JS, JavaScript, Tailwind CSS</p>
              </div>
            </div>

            <div className="category-box">
              <FaServer />
              <div>
                <h4>Backend</h4>
                <p>Node.js, React, REST APIs</p>
              </div>
            </div>

            <div className="category-box">
              <FaRobot />
              <div>
                <h4>AI Automation</h4>
                <p>n8n, Flowise, Pinecone, Chatbots, Webhooks</p>
              </div>
            </div>

            <div className="category-box">
              <FaTools />
              <div>
                <h4>Tools</h4>
                <p>Git, GitHub, VS Code, Postman, Vercel, npm, n8n</p>
              </div>
            </div>
          </div>

          <div className="about-btns">
            <a href="#projects" className="btn btn-orange">
              View Portfolio
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}