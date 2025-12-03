import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Link from 'next/link';
// Importar Lucide icons para un toque visual
import { Zap, Hand, BookOpen, HeartHandshake } from 'lucide-react';

// 💡 DATOS: Estructura completa de los servicios basados en el documento proporcionado.
// NOTA: Se añade un ícono representativo para cada categoría.
const serviciosData = [
    // --- Lecturas y Consultas Espirituales ---
    {
        title: "Tarot Adivinatorio y Preventivo",
        category: "Lecturas y Consultas Espirituales",
        icon: BookOpen,
        description: "Una práctica ancestral basada en las cartas de Tarot que permiten iluminar tu pasado, entender tu presente y vislumbrar posibles futuros, con el fin de detectar bloqueos y tomar decisiones más conscientes. Es una guía que busca anticipar caminos y ayudarte a liberar aquello que te impide avanzar.",
    },
    {
        title: "Registros Akáshicos",
        category: "Lecturas y Consultas Espirituales",
        icon: BookOpen,
        description: "Se trata de conectar con una “Biblioteca Energética del Alma”, donde se almacena información de tus vidas pasadas y presentes. Mediante una sesión guiada, accedemos a esta memoria para ayudarte a identificar y transformar patrones emocionales, descubrir tu propósito y sanar con claridad y empoderamiento.",
    },

    // --- Consultas Esotéricas y Rituales ---
    {
        title: "Rituales Personalizados de Limpieza Energética",
        category: "Consultas Esotéricas y Rituales",
        icon: Zap,
        description: "Rituales diseñados especialmente según tus necesidades. Utilizan velas, hierbas, sahumerios y visualizaciones para purificar tu energía, eliminar bloqueos y renovar tu bienestar físico, emocional y espiritual.",
    },
    {
        title: "Trabajos Personalizados",
        category: "Consultas Esotéricas y Rituales",
        icon: Zap,
        description: "Rituales y prácticas diseñadas específicamente para ti, abordando temas como el amor, la protección, la salud, el trabajo o cualquier otra situación que requiera intervención espiritual.",
    },
    {
        title: "Trabajos de Corte en Magia Negra",
        category: "Consultas Esotéricas y Rituales",
        icon: Zap,
        description: "Intervenciones específicas para detectar, neutralizar y eliminar trabajos de magia negra, envidias, maldiciones o cualquier tipo de ataque espiritual que esté afectando al consultante.",
    },
    {
        title: "Limpieza Esotéricas y Espirituales",
        category: "Consultas Esotéricas y Rituales",
        icon: Zap,
        description: "Procesos energéticos destinados a eliminar bloqueos, energías negativas o influencias externas que afectan el bienestar físico, emocional o espiritual de la persona.",
    },
    {
        title: "Cortes de Lazos Kármicos y Ancestrales",
        category: "Consultas Esotéricas y Rituales",
        icon: Zap,
        description: "Rituales enfocados en liberarte de patrones repetitivos, cargas familiares o vínculos energéticos del pasado que impiden avanzar en tu camino personal y espiritual.",
    },
    {
        title: "Mesas Radiónicas",
        category: "Consultas Esotéricas y Rituales",
        icon: Zap,
        description: "Herramientas vibracionales que actúan a distancia, utilizando símbolos y frecuencias energéticas para armonizar situaciones específicas relacionadas con lo económico, lo emocional y la salud integral.",
    },

    // --- Masajes y Sanación Corporal ---
    {
        title: "Masajes Relajantes con Piedras Calientes",
        category: "Masajes y Sanación Corporal",
        icon: Hand,
        description: "Técnica terapéutica que combina el masaje manual con la aplicación de piedras volcánicas calientes, ayudando a relajar músculos tensos, mejorar la circulación y liberar el estrés acumulado.",
    },
    {
        title: "Masaje Kobido de Cara",
        category: "Masajes y Sanación Corporal",
        icon: Hand,
        description: "Antigua técnica oriental de masaje facial que rejuvence y tonifica la piel, estimula la circulación y activa la energía vital, brindando un efecto lifting natural sin cirugía.",
    },
    {
        title: "Aromaterapia",
        category: "Masajes y Sanación Corporal",
        icon: Hand,
        description: "Terapia que utiliza aceites esenciales naturales para estimular los sentidos, equilibrar emociones, aliviar tensiones y promover el bienestar físico y mental a través del olfato y la piel.",
    },
    {
        title: "Masajes Reflexología Podal y Corporal",
        category: "Masajes y Sanación Corporal",
        icon: Hand,
        description: "Masaje basado en la estimulación de puntos reflejos en los pies y el cuerpo que se corresponden con diferentes órganos y sistemas del cuerpo, promoviendo el equilibrio y la salud general.",
    },

    // --- Acompañamiento Personal ---
    {
        title: "Procesos de Duelo",
        category: "Acompañamiento Personal",
        icon: HeartHandshake,
        description: "Acompañamiento respetuoso y consciente para transitar el dolor que produce una pérdida. Un espacio seguro para expresar tus emociones, comprender el proceso personal y encontrar herramientas que permitan vivir el duelo con mayor serenidad y aceptación.",
    },
    {
        title: "Escucha y Orientación Espiritual",
        category: "Acompañamiento Personal",
        icon: HeartHandshake,
        description: "Encuentros dedicados a brindar contención, claridad y guía desde una mirada espiritual. Se ofrece un espacio donde puedas ser escuchada sin juicio, recibir orientación para tus inquietudes y reconectar con tu sabiduría interior.",
    },
    {
        title: "Ceremonias de Cierre y Apertura de Ciclos",
        category: "Acompañamiento Personal",
        icon: HeartHandshake,
        description: "Rituales simbólicos que ayudan a cerrar etapas importantes de la vida y a dar la bienvenida a nuevas experiencias. Estas ceremonias permiten soltar con conciencia, agradecer lo vivido y prepararse con intención para lo que viene.",
    },

    // --- Terapias y Equilibrio Energético ---
    {
        title: "Técnica Quantum Holográfica",
        category: "Terapias y Equilibrio Energético",
        icon: Zap,
        description: "Método integrador que combina principios de la Cábala, la Terapia Cuántica y las Esencias Florales de Bach para identificar bloques emocionales y restaurar el equilibrio energético y espiritual de la persona.",
    },
    {
        title: "Alineación con Limpieza de Chakras",
        category: "Terapias y Equilibrio Energético",
        icon: Zap,
        description: "Trabajo energético que armoniza y desbloquea los centros de energía del cuerpo (Chakras), favoreciendo el bienestar integral, la claridad mental y el equilibrio emocional.",
    },
    {
        title: "Reiki Serafines y Canalización",
        category: "Terapias y Equilibrio Energético",
        icon: Zap,
        description: "Terapia energética basada en la conexión con la energía sanadora de los Serafines, combinada con canalización de mensajes espirituales que brindan guía, sanación profunda y paz interior.",
    },
    {
        title: "Hipnosis",
        category: "Terapias y Equilibrio Energético",
        icon: Zap,
        description: "Técnica terapéutica que permite acceder al subconsciente para trabajar emociones profundas, superar traumas, reducir la ansiedad y liberar hábitos perjudiciales como el tabaquismo.",
    },
    {
        title: "Péndulo Radiotesia",
        category: "Terapias y Equilibrio Energético",
        icon: Zap,
        description: "Herramienta sutil utilizada para detectar y armonizar desequilibrios energéticos en la persona, los espacios o situaciones. También se emplea para obtener respuestas del inconsciente y guiar procesos de sanación.",
    },
    {
        title: "Puntos Aurículos (Auriculoterapia)",
        category: "Terapias y Equilibrio Energético",
        icon: Zap,
        description: "Estimulación de puntos específicos en la oreja para ayudar en el manejo de la ansiedad, aliviar dolores físicos y apoyar procesos de cambio como dejar de fumar, de manera natural y no invasiva.",
    },
];

// Función utilitaria para agrupar los datos por la propiedad 'category'
const groupByCategory = (data: typeof serviciosData) => {
    return data.reduce((acc, service) => {
        // Utilizamos el nombre de la categoría para agrupar
        const categoryName = service.category;

        // Inicializamos la categoría si es la primera vez que la encontramos
        if (!acc[categoryName]) {
            acc[categoryName] = {
                services: [],
                icon: service.icon // Tomamos el ícono del primer servicio de esa categoría
            };
        }

        acc[categoryName].services.push(service);
        return acc;
    }, {} as Record<string, { services: typeof serviciosData, icon: any }>);
};

export default function ServiciosPage() {
    const serviciosAgrupados = groupByCategory(serviciosData);

    return (
        // Contenedor principal con fondo oscuro
        <div className="bg-[var(--color-fondo)] min-h-screen">
            {/* MÁRGENES A LOS LADOS: max-w-7xl mx-auto px-4 (móvil) sm:px-6 (tablet) lg:px-8 (desktop) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Cabecera de la Página de Servicios */}
                <header className="text-center mb-20">
                    <h1 className="
                text-6xl 
                font-extrabold 
                text-[var(--color-morado-principal)] 
                drop-shadow-lg 
                mb-4
                sm:text-7xl 
                md:text-8xl
                leading-tight
            ">
                        Nuestros Caminos de Sanación
                    </h1>
                    <p className="
                text-xl 
                text-[var(--color-texto-secundario)] 
                max-w-3xl 
                mx-auto
                mt-6
            ">
                        Exploramos diversas terapias para ofrecerte una guía integral: desde la sabiduría ancestral del Tarot hasta la sanación profunda del cuerpo y el alma. Transforma tu presente.
                    </p>
                </header>

                {/* Contenedor Principal de Servicios */}
                <main className="space-y-24">
                    {/* Mapear las categorías y renderizar la sección */}
                    {Object.entries(serviciosAgrupados).map(([category, data], index) => {
                        const IconComponent = data.icon; // Componente Lucide

                        return (
                            <section key={category} id={category.replace(/\s+/g, '-').toLowerCase()} className="
                    bg-[var(--color-fondo-modulo)] 
                    p-6 
                    md:p-10 
                    rounded-2xl 
                    shadow-2xl 
                    border 
                    border-[var(--color-borde)]
                ">

                                {/* Título de la Categoría con Ícono */}
                                <div className="flex items-center mb-10 border-b border-[var(--color-borde-morado)] pb-5">
                                    <IconComponent size={40} className="
                        text-[var(--color-morado-principal)] 
                        mr-4 
                        p-2 
                        bg-[var(--color-fondo)] 
                        rounded-full 
                        border 
                        border-[var(--color-morado-principal)]
                    "/>
                                    <h2 className="
                        text-3xl 
                        font-bold 
                        text-[var(--color-texto)] 
                        sm:text-4xl
                    ">
                                        {category}
                                    </h2>
                                </div>

                                {/* Grid de Tarjetas */}
                                <div className="
                    grid 
                    grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    gap-8
                ">
                                    {data.services.map((service, index) => (
                                        <ServiceCard
                                            key={index}
                                            title={service.title}
                                            description={service.description}
                                        />
                                    ))}
                                </div>
                            </section>
                        );
                    })}

                    {/* CTA al final */}
                    <section className="text-center pt-10 pb-16">
                        <h2 className="text-4xl font-extrabold text-[var(--color-morado-principal)] mb-6">
                            ¿Listo(a) para comenzar tu transformación?
                        </h2>
                        <p className="text-lg text-[var(--color-texto-secundario)] mb-8">
                            Agenda una sesión y permítenos guiarte hacia tu bienestar integral.
                        </p>
                        <Link href="/contacto" className="cta-button">
                            Agenda tu Sesión Ahora
                        </Link>
                    </section>

                </main>
            </div>
        </div>
    );
}