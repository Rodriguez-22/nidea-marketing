// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    // Estructura de Hero Section mejorada con enfoque visual
    <div className="home-content-container relative overflow-x-hidden min-h-screen">

        {/* 1. HERO SECTION - La más visual y atractiva */}
        {/* Aquí la imagen de fondo debe ser una nebulosa, un tarot o una mano mística para un efecto WOW */}
        <section className="booking-section pt-40 pb-40 relative z-10 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 1))' }}>
          
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 text-white">
            Marina Tarot
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-300">
            Tu guía en la sanación espiritual y el autoconocimiento.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Descubre el poder de la guía ancestral. Ofrecemos lecturas de Tarot, Registros Akáshicos y terapias de sanación energética para transformar tu presente y liberar tu potencial.
          </p>
          
          {/* CTA Principal */}
          <Link href="/contacto" className="cta-button text-lg px-8 py-4 font-bold inline-block hover:bg-[var(--color-morado-principal)] hover:border-[var(--color-morado-principal)]">
            Agenda tu Consulta Hoy
          </Link>
        </section>

        {/* 2. SECCIÓN DE SERVICIOS DESTACADOS (Enlace directo) */}
        <section className="max-w-[1400px] mx-auto py-20 px-8 text-center bg-[var(--color-fondo)]">
            <h2 className="text-4xl font-extrabold mb-10 text-white">Nuestra Oferta de Transformación</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-[var(--color-fondo-modulo)] border border-[var(--color-borde-morado)]">
                    <span className="text-4xl block mb-4">🔮</span>
                    <h3 className="text-xl font-bold mb-2">Lecturas de Tarot</h3>
                    <p className="text-gray-400">Claridad en tu camino y decisiones conscientes.</p>
                    <Link href="/servicios" className="text-[var(--color-morado-principal)] mt-4 inline-block font-medium">Ver más →</Link>
                </div>
                <div className="p-6 rounded-lg bg-[var(--color-fondo-modulo)] border border-[var(--color-borde-morado)]">
                    <span className="text-4xl block mb-4">📜</span>
                    <h3 className="text-xl font-bold mb-2">Registros Akáshicos</h3>
                    <p className="text-gray-400">Sanación de patrones ancestrales y propósitos.</p>
                    <Link href="/servicios" className="text-[var(--color-morado-principal)] mt-4 inline-block font-medium">Ver más →</Link>
                </div>
                <div className="p-6 rounded-lg bg-[var(--color-fondo-modulo)] border border-[var(--color-borde-morado)]">
                    <span className="text-4xl block mb-4">🧘‍♀️</span>
                    <h3 className="text-xl font-bold mb-2">Sanación Corporal</h3>
                    <p className="text-gray-400">Equilibrio energético y liberación de estrés.</p>
                    <Link href="/servicios" className="text-[var(--color-morado-principal)] mt-4 inline-block font-medium">Ver más →</Link>
                </div>
            </div>
        </section>

        {/* 3. SECCIÓN DE TESTIMONIOS (Dummy Content - Reemplace con testimonios reales) */}
        <section className="max-w-[1400px] mx-auto py-20 px-8 text-center bg-[var(--color-fondo-modulo)]">
            <h2 className="text-4xl font-extrabold mb-12 text-white">Lo Que Dicen Nuestros Clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <blockquote className="bg-[#181818] p-6 rounded-xl border-l-4 border-[var(--color-morado-principal)] text-left">
                    <p className="text-gray-300 italic mb-4">"La sesión fue increíblemente reveladora. Marina no solo vio el futuro, sino que me dio las herramientas para cambiar mi presente. La recomiendo al 100%."</p>
                    <footer className="text-sm font-semibold text-[var(--color-morado-principal)]">— Ana M.</footer>
                </blockquote>
                <blockquote className="bg-[#181818] p-6 rounded-xl border-l-4 border-[var(--color-morado-principal)] text-left">
                    <p className="text-gray-300 italic mb-4">"Me ayudó a cerrar un ciclo muy pesado. El masaje de sanación fue profundo y el enfoque holístico es justo lo que necesitaba."</p>
                    <footer className="text-sm font-semibold text-[var(--color-morado-principal)]">— Javier P.</footer>
                </blockquote>
            </div>
        </section>

        {/* 4. CTA FINAL */}
        <section className="booking-section py-20">
            <h2 className="text-4xl font-extrabold mb-6 text-white">¿Lista para el Autodescubrimiento?</h2>
             <Link href="/contacto" className="cta-button text-lg px-8 py-4 font-bold inline-block hover:bg-[var(--color-morado-principal)] hover:border-[var(--color-morado-principal)]">
                Reserva tu Sesión
            </Link>
        </section>

    </div>
  );
}