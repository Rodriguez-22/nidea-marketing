// rodriguez-22/nidea-marketing/nidea-marketing-15893a801ab79dff58e5598a883b92ba30b64bea/app/sobre-mi/page.tsx

import React from 'react';

// === Metadata específica para esta página ===
export const metadata = {
    title: "Sobre Mí | Marina Tarot",
    description: "Conoce mi historia, filosofía y el compromiso que guía mi trabajo espiritual y de sanación.",
};

// === Estructura de Datos de la Filosofía (4 elementos para el grid 2x2) ===
const aboutData = [
    {
        category: "Mi Propósito",
        icon: "✨",
        title: "Mi Filosofía de Guía",
        description: "Mi misión es ser un faro de claridad y guía. Te acompaño a conectar con tu sabiduría interior, proporcionándote las herramientas para tomar **decisiones conscientes** y **empoderarte** en tu camino personal. No busco predecir, sino iluminar.",
    },
    {
        category: "Mi Trayectoria",
        icon: "📜",
        title: "Camino y Formación",
        description: "He dedicado años al estudio y la práctica de las artes esotéricas y terapias energéticas. Mi **formación continua** en Tarot, Registros Akáshicos y técnicas de sanación avala la profundidad y seriedad de cada consulta. Mis raíces son la **sabiduría ancestral**.",
    },
    {
        category: "Mi Método",
        icon: "🔍",
        title: "El Proceso de Sanación",
        description: "Trabajo desde un **enfoque holístico e integral**. No solo busco el qué (el futuro), sino el por qué (el bloqueo energético). Utilizo una combinación intuitiva de lectura y sanación, adaptando cada sesión a tu necesidad única y momento vital.",
    },
    {
        category: "Mi Compromiso",
        icon: "❤️",
        title: "Ética y Confidencialidad",
        description: "La **ética**, el **respeto** y la **confidencialidad** son innegociables. Te ofrezco un espacio seguro y libre de juicios para que puedas explorar tus inquietudes con total confianza, promoviendo siempre tu bienestar físico y espiritual.",
    },
];

// Componente para el ícono de acento (ajustado a w-3 h-3)
const StarIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-3 h-3 mr-0 text-[var(--color-morado-principal)] flex-shrink-0" 
        viewBox="0 0 24 24" 
        fill="currentColor"
    >
        <path d="M12 2l3.09 6.26l6.91 1.01l-5 4.88l1.18 6.88L12 17.77l-6.18 3.25l1.18-6.88l-5-4.88l6.91-1.01L12 2z"/>
    </svg>
);


export default function SobreMiPage() {
    return (
        <div className="overflow-x-hidden min-h-screen">
            {/* Contenedor principal ajustado a 1400px de ancho máximo */}
            <section className="max-w-[1400px] mx-auto pt-20 pb-40 px-4 md:px-6 text-center">
                
                {/* Título Principal */}
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
                    Mi Historia y **Filosofía**
                </h1>
                {/* Párrafo de introducción con la clase de separación forzada */}
                <p className="text-xl text-gray-400 max-w-3xl mx-auto intro-spacing"> 
                    Mi trabajo va más allá de la adivinación. Se centra en el **autodescubrimiento**, la **sanación** y el **empoderamiento** personal. Aquí te explico los pilares que guían cada consulta y ritual.
                </p>

                {/* Contenedor de Módulos (Grid 2x2 en escritorio) */}
                <div className="grid services-grid-container items-stretch gap-x-12 gap-y-28 sm:gap-x-20 sm:gap-y-32 text-left">
                    
                    {aboutData.map((item, index) => (
                        <div 
                            key={index} 
                            // Usamos las mismas clases del service-module para heredar el diseño y la estética
                            className="p-8 rounded-xl shadow-xl transition duration-300 service-module hover:shadow-purple-700/50" 
                        >
                            
                            {/* Título de la Categoría/Pilar (H2) */}
                            <h2 
                                className="text-3xl lg:text-4xl font-extrabold mb-8 flex items-center service-category-title"
                            >
                                <span className="mr-4 text-5xl">{item.icon}</span>
                                {item.category}
                            </h2>

                            {/* Contenido del Pilar */}
                            <div className="space-y-6"> 
                                <div className="service-item"> 
                                    {/* Título interno que usa el StarIcon pequeño */}
                                    <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                                        <StarIcon />
                                        {item.title}
                                    </h3>
                                    {/* Descripción principal */}
                                    <p 
                                        className="text-gray-400"
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}