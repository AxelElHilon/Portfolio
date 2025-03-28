// src/components/Projects.js
import React from 'react';
import './WebDevelopment.css';

const Projects = () => {
  return (
    <section id="web">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Hype Gear | E-commerce</h3>
        <p>
          This project is part of my course at Coder House.
          This project is a work in progress and a personal venture.
        </p>
        <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <h3>Landing Page - Portfolio</h3>
        <img src="images/page-icon.png" alt="Landing Page Portfolio" className="project-thumbnail" />
        <p>
        Here is the page of my portfolio uploaded to GitHub, 
        where you can see the technologies I used, 
        including JavaScript, CSS, React, and some HTML.
        This project is still in progress.
        </p>
        <a href="https://github.com/AxelElHilon/Portfolio.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>    
      </div>
      {/* Agrega más proyectos aquí */}
    </section>
  );
};

export default Projects;
