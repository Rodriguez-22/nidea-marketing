// app/components/ServiceCard.tsx

import React from 'react';

// === Ícono de Acento ===
const StarIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        // CAMBIO: w-4 h-4 -> w-3 h-3 para hacer la estrella más pequeña
        className="w-3 h-3 mr-0 text-[var(--color-morado-principal)] flex-shrink-0" 
        viewBox="0 0 24 24" 
        fill="currentColor"
    >
        <path d="M12 2l3.09 6.26l6.91 1.01l-5 4.88l1.18 6.88L12 17.77l-6.18 3.25l1.18-6.88l-5-4.88l6.91-1.01L12 2z"/>
    </svg>
);


interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    return (
        <div className="
            /* LAYOUT y FONDO */
            bg-[var(--color-fondo-modulo)] 
            rounded-2xl 
            
            /* AUMENTO CRÍTICO DEL PADDING: p-10 (40px) y p-12 (48px) en escritorio */
            p-8 
            md:p-12 
            
            h-full
            flex 
            flex-col

            /* EFECTOS VISUALES y BORDES */
            border 
            border-[var(--color-borde)]
            shadow-lg 
            
            /* INTERACCIÓN (Hover) */
            hover:border-[var(--color-morado-principal)] 
            hover:shadow-[0_10px_20px_rgba(168,85,247,0.3)] 
            hover:translate-y-[-4px] 
            transition 
            duration-300 
            ease-in-out
        ">
            {/* TÍTULO MEJORADO */}
            <h3 className="
                text-xl 
                md:text-2xl 
                font-extrabold 
                mb-6 /* Aumentamos el margen inferior para separarlo del texto */
                text-[var(--color-morado-principal)]
                flex items-center 
            ">
                <StarIcon />
                {title}
            </h3>
            
            {/* DESCRIPCIÓN MEJORADA */}
            <p className="
                text-base 
                text-[var(--color-texto-secundario)]
                flex-grow /* Permite que el texto ocupe el espacio restante */
                leading-relaxed 
            ">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;