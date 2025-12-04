// app/page.tsx
import Link from 'next/link';

export default function Home() {
  
  // URL de imagen de fondo de ejemplo. REEMPLAZA ESTA URL.
  const heroImageUrl = "/fondo_tarot.png";
  
  return (
    // Estructura de Hero Section mejorada con enfoque visual
    <div className="home-content-container relative overflow-x-hidden min-h-screen">

        {/* 1. HERO SECTION - La más visual y atractiva */}
        <section 
            className="relative flex flex-col items-center justify-center min-h-[80vh] pt-40 pb-40 text-center"
            style={{ 
                // Añadimos una imagen de fondo y un filtro oscuro para que el texto destaque
                backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.75)), url('${heroImageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
          <div className="z-10 max-w-4xl px-4">
              <h1 className="hero-title font-extrabold text-white leading-tight">
                Marina Tarot
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-300">
                Tu guía en la sanación espiritual y el autoconocimiento.
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
                Descubre el poder de la guía ancestral. Ofrecemos lecturas de Tarot, Registros Akáshicos y terapias de sanación energética para transformar tu presente y liberar tu potencial.
              </p>
              
              {/* CTA Principal */}
              <Link href="/contacto" className="cta-button text-lg px-8 py-4 font-bold inline-block bg-[var(--color-morado-principal)] border-[var(--color-morado-principal)] text-white hover:bg-[#8B5CF6] border-2 transition duration-300">
                Agenda tu Consulta Hoy
              </Link>
          </div>
        </section>

        {/* 2. SECCIÓN DE SERVICIOS DESTACADOS (Enlace directo) */}
        <section className="max-w-[1400px] mx-auto py-20 px-8 text-center bg-[var(--color-fondo)]">
            <h2 className="text-4xl font-extrabold mb-10 text-white">Nuestra Oferta de Transformación</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Bloque 1 */}
                <div className="p-6 rounded-xl bg-[var(--color-fondo-modulo)] border border-[var(--color-borde-morado)] hover:border-[var(--color-morado-principal)] transition duration-300 shadow-xl">
                    <span className="text-5xl block mb-4">🔮</span>
                    <h3 className="text-xl font-bold mb-2 font-[var(--font-heading)]">Lecturas de Tarot</h3>
                    <p className="text-gray-400 text-sm">Claridad en tu camino y decisiones conscientes.</p>
                    <Link href="/servicios" className="text-[var(--color-morado-principal)] mt-4 inline-block font-medium hover:text-white">Ver más →</Link>
                </div>
                {/* Bloque 2 */}
                <div className="p-6 rounded-xl bg-[var(--color-fondo-modulo)] border border-[var(--color-borde-morado)] hover:border-[var(--color-morado-principal)] transition duration-300 shadow-xl">
                    <span className="text-5xl block mb-4">📜</span>
                    <h3 className="text-xl font-bold mb-2 font-[var(--font-heading)]">Registros Akáshicos</h3>
                    <p className="text-gray-400 text-sm">Sanación de patrones ancestrales y propósitos.</p>
                    <Link href="/servicios" className="text-[var(--color-morado-principal)] mt-4 inline-block font-medium hover:text-white">Ver más →</Link>
                </div>
                {/* Bloque 3 */}
                <div className="p-6 rounded-xl bg-[var(--color-fondo-modulo)] border border-[var(--color-borde-morado)] hover:border-[var(--color-morado-principal)] transition duration-300 shadow-xl">
                    <span className="text-5xl block mb-4">🧘‍♀️</span>
                    <h3 className="text-xl font-bold mb-2 font-[var(--font-heading)]">Sanación Corporal</h3>
                    <p className="text-gray-400 text-sm">Equilibrio energético y liberación de estrés.</p>
                    <Link href="/servicios" className="text-[var(--color-morado-principal)] mt-4 inline-block font-medium hover:text-white">Ver más →</Link>
                </div>
            </div>
        </section>

        {/* 3. SECCIÓN DE TESTIMONIOS (Mejorado el contraste) */}
        <section className="max-w-[1400px] mx-auto py-20 px-8 text-center bg-[var(--color-fondo-modulo)]">
            <h2 className="text-4xl font-extrabold mb-12 text-white">Lo Que Dicen Nuestros Clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <blockquote className="bg-[#181818] p-8 rounded-xl border-l-8 border-[var(--color-morado-principal)] shadow-2xl text-left transform hover:scale-[1.01] transition duration-300">
                    <p className="text-gray-300 italic mb-4 text-lg">"La sesión fue increíblemente reveladora. Marina no solo vio el futuro, sino que me dio las herramientas para cambiar mi presente. La recomiendo al 100%."</p>
                    <footer className="text-base font-semibold text-white">— Ana M.</footer>
                </blockquote>
                <blockquote className="bg-[#181818] p-8 rounded-xl border-l-8 border-[var(--color-morado-principal)] shadow-2xl text-left transform hover:scale-[1.01] transition duration-300">
                    <p className="text-gray-300 italic mb-4 text-lg">"Me ayudó a cerrar un ciclo muy pesado. El masaje de sanación fue profundo y el enfoque holístico es justo lo que necesitaba."</p>
                    <footer className="text-base font-semibold text-white">— Javier P.</footer>
                </blockquote>
            </div>
        </section>

        {/* 4. CTA FINAL */}
        <section className="booking-section py-20">
            <h2 className="text-4xl font-extrabold mb-6 text-white">¿Lista para el Autodescubrimiento?</h2>
             <Link href="/contacto" className="cta-button text-lg px-8 py-4 font-bold inline-block bg-[var(--color-morado-principal)] border-[var(--color-morado-principal)] text-white hover:bg-[#8B5CF6] border-2 transition duration-300">
                Reserva tu Sesión
            </Link>
        </section>

    </div>
  );
}