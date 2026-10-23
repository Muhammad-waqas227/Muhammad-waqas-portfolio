import React from 'react';
import './Services.css';

// React Icons Import
import { FaCode, FaHtml5, FaJs, FaReact, FaProjectDiagram, FaRobot, FaArrowRight, FaComments } from 'react-icons/fa';

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-title">
        <h2>My Services</h2>
        <p>Comprehensive digital solutions tailored to your business needs</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="icon-box">
            <FaCode />
          </div>
          <h3>Web Development (Frontend)</h3>
          <p>
            Responsive, fast, and interactive user interfaces built with modern technologies like HTML, CSS, JavaScript, and React to deliver seamless user experiences.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-box">
            <FaHtml5 />
          </div>
          <h3>HTML & CSS</h3>
          <p>
            Building clean, semantic HTML structure and modern CSS styling with flexbox, grid, and animations for fully responsive web pages.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-box">
            <FaJs />
          </div>
          <h3>JAVASCRIPT</h3>
          <p>
            Building dynamic, interactive, and logic-driven web applications using modern JavaScript (ES6+), clean DOM manipulation, and efficient state handling.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-box">
            <FaReact />
          </div>
          <h3>REACT.JS</h3>
          <p>
            Developing scalable, fast, and component-based user interfaces with React, managing state efficiently, and integrating APIs seamlessly.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-box">
            <FaProjectDiagram />
          </div>
          <h3>AUTOMATION IN N8N</h3>
          <p>
            Connecting applications and building powerful visual automated workflows using n8n and webhooks to manage data seamlessly.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-box">
            <FaRobot />
          </div>
          <h3>SMART AI BOTS & INTEGRATIONS</h3>
          <p>
            Developing intelligent chatbots using Flowise, Pinecone, and LLMs, integrated seamlessly with WhatsApp, Telegram, and custom web platforms.
          </p>
        </div>
      </div>

      <div className="center-btns">
        <a href="#projects" className="btn btn-orange">
          View All Projects <FaArrowRight />
        </a>
        <a href="#contact" className="btn btn-outline">
          Get In Touch <FaComments />
        </a>
      </div>
    </section>
  );
}