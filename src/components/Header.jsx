import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const menuRef = useRef(null); // Referencia para el contenedor del dropdown
  const dropdownRef = useRef(null); // Referencia para el submenú
  const lastScrollY = useRef(0); // Para comparar el scroll anterior y el actual

  // Función para manejar el scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      // Si estamos bajando
      setIsScrollingDown(true);
    } else {
      // Si estamos subiendo
      setIsScrollingDown(false);
    }
    lastScrollY.current = window.scrollY;
  };

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
    window.addEventListener('scroll', handleScroll); // Detectar el scroll
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll); // Limpiar el evento de scroll
    };
  }, []);

  return (
    <header className={isScrollingDown ? 'hidden' : ''}> {/* Aplica la clase "hidden" cuando se hace scroll hacia abajo */}
     
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
