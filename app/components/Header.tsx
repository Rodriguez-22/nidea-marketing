// app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          NIDEA
          <span>MARKETING</span>
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
          {/* Los enlaces externos usan <a> normal */}
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