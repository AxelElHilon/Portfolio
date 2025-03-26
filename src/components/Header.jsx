import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Axel El Hilon</div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
