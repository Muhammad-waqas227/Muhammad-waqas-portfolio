import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillsData = [
    { title: 'Frontend Development (React)', percentage: '90%' },
    { title: 'Backend Development (Node.js)', percentage: '85%' },
    { title: 'AI AUTOMATION', percentage: '90%' },
    { title: 'AI AUTOMATION & N8N', percentage: '90%' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-title">
        <h2>Skills & Experience</h2>
        <p>My technical expertise and professional journey</p>
      </div>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-info">
              <span>{skill.title}</span>
              <span>{skill.percentage}</span>
            </div>
            <div className="progress-line">
              <span style={{ width: skill.percentage }}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}