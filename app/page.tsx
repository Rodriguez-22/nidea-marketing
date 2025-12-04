// rodriguez-22/nidea-marketing/nidea-marketing-cb01a82ea52f073f3bdee47c4b0ea54a4f928175/app/page.tsx
import Link from 'next/link'; // Importamos Link para el CTA

export default function Home() {
  
  // URL de imagen de fondo de ejemplo. REEMPLAZA ESTA URL.
  const heroImageUrl = "/fondo_tarot.png";
  
  return (
    // Agregamos el estilo de fondo al contenedor principal de la página.
    <div className="home-content-container relative overflow-x-hidden min-h-screen"
        style={{ 
            // Capa de filtro oscuro + imagen de fondo
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.75)), url('${heroImageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
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
        
        {/* Contenido principal */}
        <h1 className="hero-title font-extrabold text-white leading-tight">Marina Tarot</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-300">Tu guía en la sanación espiritual y el autoconocimiento.</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
          Descubre el poder de la guía ancestral. Ofrecemos lecturas de Tarot, Registros Akáshicos y terapias de sanación energética para transformar tu presente y liberar tu potencial.
        </p>
        
        {/* Enlace al CTA para ir a la nueva página de Contacto */}
        <p className="home-cta-spacing">
            {/* Aplicamos el estilo CTA con colores morados */}
            <Link href="/contacto" className="cta-button text-lg px-8 py-4 font-bold inline-block bg-[var(--color-morado-principal)] border-[var(--color-morado-principal)] text-white hover:bg-[#8B5CF6] border-2 transition duration-300">
                Agenda tu Consulta Hoy
            </Link>
        </p>
      </section>
    </div>
  );
}