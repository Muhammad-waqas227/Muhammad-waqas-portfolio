import React from 'react';
import './Testimonials.css';

// Images import
import safi from '../../Images/safi.png';
import muhammad from '../../Images/muhammad.png';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-title">
        <h2>Testimonials</h2>
        <p>What my clients say about me</p>
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="client-photo">
            <img src={safi} alt="safi.png" />
          </div>
          <p className="quote">
           "Safi Ullah delivered our web application well before the deadline with outstanding quality. His design sense is unmatched!"
          </p>
          <h4>Safi Ullah</h4>
          <span>Web,developer & Ai Automation</span>
        </div>

        <div className="testimonial-card">
          <div className="client-photo">
            <img src={muhammad} alt="muhammad.png" />
          </div>
          <p className="quote">
      "Exceptional communication and high-level coding standards. Muhammad converted our messy ideas into a brilliant product."
          </p>
          <h4>Muhammad Ullah</h4>
          <span>Web,developer & Ai Automation</span>
        </div>
      </div>
    </section>
  );
}