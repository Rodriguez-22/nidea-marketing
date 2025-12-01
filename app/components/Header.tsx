// app/components/Header.tsx
import Link from 'next/link';
// Importar Image de Next.js si prefieres la optimización (recomendado)
// import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          {/* Reemplazamos el texto por una imagen */}
          <img 
            src="/icono.png" // Asegúrate de que tu logo sea blanco o con contraste para el fondo oscuro
            alt="NIDEA MARKETING Logo" 
            className="header-logo-image" // Añadimos una clase para estilizarlo fácilmente
          />
          {/* Si usas next/image:
          <Image
            src="/images/your-logo-white.svg"
            alt="NIDEA MARKETING Logo"
            width={150} // Ajusta según el tamaño de tu logo
            height={40} // Ajusta según el tamaño de tu logo
            className="header-logo-image"
          />
          */}
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/nosotros">Nosotros</Link></li>
          <li><Link href="/servicios">Servicios</Link></li>
          <li><Link href="/contacto" className="active">Contacto</Link></li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="social-icons">
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
        <a href="#" className="cta-button">¿HABLAMOS?</a>
      </div>
    </header>
  );
}