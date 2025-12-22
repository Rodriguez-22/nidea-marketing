// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* === SECCIÓN 1: HERO (PORTADA) === */}
      <section className="hero-section">
        {/* Imagen Local: Fondo principal */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg" // ⬅️ REFERENCIA AL ARCHIVO LOCAL
            alt="Fondo místico universo"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        {/* Capa de oscurecimiento */}
        <div className="overlay"></div>

        {/* Contenido Central */}
        <div className="hero-content animate-fade-in-up">
          <h2 className="text-purple-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            Conecta con tu interior
          </h2>
          <h1 className="text-5xl md:text-7xl font-playfair font-black mb-6 text-white leading-tight">
            Claridad para tu <br />
            <span className="text-gradient">Camino Espiritual</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Descubre el poder de la guía ancestral. Lecturas de Tarot, Registros Akáshicos y sanación energética para transformar tu presente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="cta-button bg-purple-600 border-purple-600 text-white hover:bg-purple-700">
              Agenda tu Lectura
            </Link>
            <Link href="/servicios" className="cta-button border-white hover:bg-white hover:text-black">
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* === SECCIÓN 2: INTRODUCCIÓN / SOBRE MÍ === */}
      <section className="content-section">
        <div className="split-layout">
          {/* Imagen Local: Perfil */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-purple-900/30 shadow-2xl">
            <Image
              src="/perfil.jpg" // ⬅️ REFERENCIA AL ARCHIVO LOCAL
              alt="Marina Tarot Lectura"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Columna Texto */}
          <div className="flex flex-col justify-center">
            <h3 className="text-purple-400 font-bold mb-2 uppercase tracking-wide">Sobre mí</h3>
            <h2 className="text-4xl font-playfair font-bold mb-6 text-white">Más que cartas, una guía para tu alma.</h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              Mi nombre es Marina. A través del Tarot y la intuición, ayudo a personas como tú a encontrar respuestas en momentos de incertidumbre. No se trata de predecir un futuro inamovible, sino de iluminar las opciones que tienes hoy para construir el mañana que deseas.
            </p>
            <ul className="space-y-4 mb-8 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-purple-500 text-xl">✨</span> Lecturas profundas y empáticas.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-500 text-xl">🌙</span> Enfoque terapéutico y evolutivo.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-500 text-xl">🔮</span> Sesiones 100% confidenciales online.
              </li>
            </ul>
            <Link href="/sobre-mi" className="text-purple-400 font-bold hover:text-purple-300 transition-colors inline-flex items-center gap-2">
              Leer mi historia completa <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* === SECCIÓN 3: SERVICIOS DESTACADOS === */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="content-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Mis Servicios</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Elige la herramienta que mejor resuene contigo en este momento de tu vida.</p>
          </div>

          <div className="features-grid">
            {/* Tarjeta 1: Tarot */}
            <div className="magic-card group">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                 <Image 
                   src="/tarot.jpg" // ⬅️ REFERENCIA AL ARCHIVO LOCAL
                   alt="Tarot Terapéutico"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-500"
                 />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-3">Tarot Terapéutico</h3>
              <p className="text-gray-400 mb-6">Analizamos tu presente para desbloquear tu futuro. Ideal para toma de decisiones y claridad mental.</p>
              <Link href="/servicios" className="text-sm font-bold uppercase tracking-wider text-white border-b border-purple-500 pb-1 hover:text-purple-400">Ver Detalles</Link>
            </div>

            {/* Tarjeta 2: Registros */}
            <div className="magic-card group">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                 <Image 
                   src="/registros.jpg" // ⬅️ REFERENCIA AL ARCHIVO LOCAL
                   alt="Registros Akáshicos"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-500"
                 />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-3">Registros Akáshicos</h3>
              <p className="text-gray-400 mb-6">Accede a la memoria de tu alma. Entiende tus bloqueos, lecciones de vida y propósito.</p>
              <Link href="/servicios" className="text-sm font-bold uppercase tracking-wider text-white border-b border-purple-500 pb-1 hover:text-purple-400">Ver Detalles</Link>
            </div>

            {/* Tarjeta 3: Sanación */}
            <div className="magic-card group">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                 <Image 
                   src="/sanacion.jpg" // ⬅️ REFERENCIA AL ARCHIVO LOCAL
                   alt="Sanación Energética"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-500"
                 />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-3">Sanación Energética</h3>
              <p className="text-gray-400 mb-6">Limpieza de aura y equilibrio de chakras para recuperar tu bienestar y vitalidad.</p>
              <Link href="/servicios" className="text-sm font-bold uppercase tracking-wider text-white border-b border-purple-500 pb-1 hover:text-purple-400">Ver Detalles</Link>
            </div>
          </div>
        </div>
      </section>

      {/* === SECCIÓN 4: FINAL CTA === */}
      <section className="py-24 text-center px-4 relative overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px] -z-10"></div>
        
        <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">¿Lista para transformar tu energía?</h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          No dejes para mañana las respuestas que puedes encontrar hoy.
        </p>
        <Link href="/contacto" className="cta-button text-lg px-10 py-4 bg-white text-black font-bold hover:bg-gray-200">
          Reservar Cita Ahora
        </Link>
      </section>
    </>
  );
}