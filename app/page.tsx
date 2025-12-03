// app/page.tsx
// Ya no se necesita importar CustomBooking aquí.

export default function Home() {
  return (
    <div className="home-content-container">
      {/* Usamos booking-section para heredar estilos de centrado/márgenes */}
      <section className="booking-section">
        
        {/* Contenido de la nueva página de inicio */}
        <h1>Marina Tarot</h1>
        <h2>Tu guía en la sanación espiritual y el autoconocimiento.</h2>
        <p>
          Descubre el poder de la guía ancestral. Ofrecemos lecturas de Tarot, Registros Akáshicos y terapias de sanación energética para transformar tu presente y liberar tu potencial.
        </p>
        
        {/* Enlace al CTA para ir a la nueva página de Contacto */}
        <p style={{ marginTop: '40px' }}>
            <a href="/contacto" className="cta-button">Agenda tu Consulta Hoy</a>
        </p>
      </section>
    </div>
  );
}