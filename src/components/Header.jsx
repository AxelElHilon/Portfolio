import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia para el contenedor del dropdown
  const dropdownRef = useRef(null); // Referencia para el submenú

  // Función para cerrar el menú cuando se hace clic fuera
  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  };

  // Agregar evento para clics fuera del menú cuando el componente se monta
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <img src="/images/profile-bco.png" alt="logo de la pagina" />
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>

          {/* Menú desplegable en Projects */}
          <li
            className="dropdown"
            ref={menuRef}
            onMouseEnter={() => setMenuOpen(true)} // Mostrar menú cuando el mouse entra
            onMouseLeave={() => setMenuOpen(false)} // Ocultar menú cuando el mouse sale
          >
            <button className="dropbtn">
              Projects <span className={`arrow ${menuOpen ? 'open' : ''}`}>&#9662;</span>
            </button>
            <ul
              ref={dropdownRef}
              className={`submenu ${menuOpen ? 'show' : ''}`}
              onMouseEnter={() => setMenuOpen(true)} // Mantener el menú abierto si el mouse entra en el submenú
              onMouseLeave={() => setMenuOpen(false)} // Cerrar el menú si el mouse sale del submenú
            >
              <li><a href="#web">Web Development</a></li>
              <li><a href="#uiux">UI/UX Design</a></li>
              <li><a href="#animation">Animation</a></li>
            </ul>
          </li>

          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
