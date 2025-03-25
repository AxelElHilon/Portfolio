// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>Description of the project goes here.</p>
        <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      {/* Agrega más proyectos aquí */}
    </section>
  );
};

export default Projects;
