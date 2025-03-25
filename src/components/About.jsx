import React from 'react';
import './About.css';
const About = () => {
  return (
    <section id="about">
      <h2 className="tittle">About Me</h2>

      <div className="about-container">
        <img className="profile-image" src="/images/profile.jpg" alt="Axel El Hilon" />

        <p className="description">
        Soy un apasionado del diseño UX/UI y el desarrollo web, con formación en Web Development, 
        JavaScript y React. Además, tengo experiencia en Motion Graphics y habilidades avanzadas en After Effects, 
        lo que me permite crear animaciones atractivas y funcionales. 
        Manejo Illustrator para potenciar la creatividad en mis proyectos.
         Me enfoco en combinar diseño y funcionalidad para ofrecer experiencias de usuario únicas y efectivas. 🚀
        </p>
      </div>

      {/* Logo de habilidades */}
      <div className="skills-logo">
        <img src="/images/html-logo.png" alt="HTML" />
        <img src="/images/css-logo.png" alt="CSS" />
        <img src="/images/javascript-logo.png" alt="JavaScript" />
        <img src="/images/react-logo.png" alt="React" />
        <img src="/images/adobe-aftereffects.png" alt="After Effects" />
        <img src="/images/illustrator-logo.png" alt="Illustrator" />
        <img src="/images/bootstrapt-logo.png" alt="Bootstrap" />
        <img src="/images/sass-logo.png" alt="Sass" />
      </div>
    </section>
  );
};

export default About;
