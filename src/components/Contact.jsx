// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importamos los íconos

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to reach out, you can contact me through any of the following:</p>
      <ul>
        <li className="contact-item">
          <a href="mailto:axelelhilon@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="contact-icon" />
          </a>
        </li>
        <li className="contact-item">
          <a href="https://github.com/AxelElHilon" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" />
          </a>
        </li>
        <li className="contact-item">
          <a href="https://www.linkedin.com/in/axel-el-hilon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
