import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-title">
        <h2>Contact Me</h2>
        <p>Have a project in mind? Let's discuss!</p>
      </div>

      <div className="contact-container">
        <form className="contact-form" id="contactForm">
          <div className="input-group">
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div className="input-group">
            <input type="text" id="subject" placeholder="Subject" required />
          </div>

          <div className="input-group">
            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="btn btn-orange">
            Send Message <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}