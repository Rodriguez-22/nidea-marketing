"use client"; // <--- ¡AÑADE ESTA LÍNEA AQUÍ!

import Link from 'next/link';
import { useState } from 'react';
// Importar Image de Next.js si prefieres la optimización (recomendado)
// import Image from 'next/image';

export default function Header() {
  // 1. Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function setIsOpen(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  return (
    <header className="main-header">
      <div className="logo">
        <Link href="/">
          {/* Reemplazamos el texto por una imagen */}
          <img 
            src="/logo.png"
            alt="NIDEA MARKETING Logo" 
            className="header-logo-image"
          />
        </Link>
      </div>

      {/* 2. Botón de Hamburguesa (visible solo en móvil con CSS) */}
      <button 
        className="hamburger-menu-button" 
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        {/* Usamos iconos de Font Awesome para el ícono */}
        <i className={isMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </button>

      {/* 3. Navegación: Añadimos una clase para el estado del menú */}
      <nav className={`main-nav ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul>
          {/* Al hacer clic en un enlace, cerramos el menú automáticamente */}
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
          <li><Link href="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</Link></li>
          <li><Link href="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link></li>
          <li><Link href="/contacto" className="active" onClick={() => setIsOpen(false)}>Contacto</Link></li>
        </ul>
      </nav>
      
      {/* Elementos de la derecha que deberían desaparecer o moverse en móvil */}
      <div className="header-right">
        <div className="social-icons">
          {/* ... Iconos sociales ... */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
        <a href="/contacto" className="cta-button">¿HABLAMOS?</a>
      </div>
    </header>
  );
}