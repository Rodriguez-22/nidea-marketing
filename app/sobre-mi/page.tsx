import React from 'react';

// Se recomienda usar la directiva 'use client' solo si la página necesita interactividad (hooks, clicks, etc.)
// Si es una página de contenido estático (como esta), es mejor dejarla como Server Component (por defecto).

export default function SobreMiPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Sobre Mí</h1>
      
      {/* 💡 CONTENIDO: Aquí debe ir el breve resumen que Marina quiera transmitir  */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-lg">
          {/* Reemplazar con el texto de Marina (o el generado por ChatGPT) */}
          [Aquí va el resumen de lo que Marina quiere transmitir...] 
        </p>
      </section>
      
      {/* 💡 FOTO: Si te pasa una foto, la debes colocar aquí.  */}
      {/* <div className="mt-8">
        <Image src="/ruta/a/la/foto.jpg" alt="Marina Tarot" width={400} height={400} />
      </div> */}
      
      {/* Puedes añadir la sección "En nosotros, yo quizá pondría sobre mi"  */}
      
    </main>
  );
}