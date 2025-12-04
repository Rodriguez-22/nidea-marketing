// app/page.tsx

export default function Home() {
  return (
    // Reemplazamos 'booking-section' con 'home-content-container' para el nuevo diseño.
    <div className="home-content-container">
      <section>
        
        {/* Nuevo: Logo de Marina Tarot como elemento central */}
        <div className="hero-logo-container">
            {/* La imagen ya está en public/logo.png */}
            <img
                src="/logo.png" 
                alt="MARINA TAROT Logo"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
        
        {/* Contenido de la nueva página de inicio */}
        <h1>Marina Tarot</h1>
        <h2>Tu guía en la sanación espiritual y el autoconocimiento.</h2>
        <p>
          Descubre el poder de la guía ancestral. Ofrecemos lecturas de Tarot, Registros Akáshicos y terapias de sanación energética para transformar tu presente y liberar tu potencial.
        </p>
        
        {/* Enlace al CTA para ir a la nueva página de Contacto */}
        {/* Utilizamos la clase 'home-cta-spacing' en lugar del estilo en línea */}
        <p className="home-cta-spacing">
            <a href="/contacto" className="cta-button">Agenda tu Consulta Hoy</a>
        </p>
      </section>
    </div>
  );
}