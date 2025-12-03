import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    return (
        <div className="
            bg-[var(--color-fondo-modulo)] 
            rounded-xl 
            p-6 
            shadow-xl 
            border 
            border-[var(--color-borde)]
            hover:border-[var(--color-morado-principal)] 
            hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] 
            transition 
            duration-300 
            ease-in-out
            h-full
            flex 
            flex-col
        ">
            <h3 className="
                text-xl 
                font-bold 
                mb-3 
                text-[var(--color-morado-principal)]
                border-b 
                border-[var(--color-borde-morado)]
                pb-2
            ">
                {title}
            </h3>
            <p className="
                text-sm 
                text-[var(--color-texto-secundario)]
                flex-grow 
            ">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;