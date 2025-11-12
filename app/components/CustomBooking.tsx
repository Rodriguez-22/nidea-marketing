// app/components/CustomBooking.tsx
'use client'; 

import { useState } from 'react';
// ¡ADIÓS a react-calendar!
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; 

// ¡HOLA a tu nuevo componente!
import CustomCalendar from './CustomCalendar'; // Asegúrate que la ruta es correcta

// --- Horas disponibles SIMULADAS ---
const mockAvailableTimes = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00'
];

export default function CustomBooking() {
    
    // Simplificamos el estado de la fecha
    const [date, setDate] = useState<Date | null>(null);
    
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        asunto: '',
    });

    // Nuevo manejador para la fecha
    const handleDateChange = (newDate: Date) => {
        setDate(newDate);
        setSelectedTime(null); // Resetea la hora si cambia el día
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        const tuNumeroWhatsApp = "34000000000"; // <-- ¡CAMBIA ESTO!

        // Usamos el estado 'date' que ya es un objeto Date
        const formattedDate = date?.toLocaleDateString('es-ES', { 
            day: 'numeric', month: 'long', year: 'numeric' 
        });

        let mensaje = `¡Hola! 👋 Quisiera reservar una reunión:\n\n` +
                      `*Fecha:* ${formattedDate}\n` +
                      `*Hora:* ${selectedTime}\n` +
                      `----------\n` +
                      `*Nombre:* ${formData.nombre}\n` +
                      `*Apellidos:* ${formData.apellidos}\n` +
                      `*Asunto:* ${formData.asunto}`;
        let mensajeCodificado = encodeURIComponent(mensaje);
        const urlWhatsApp = `https://wa.me/${tuNumeroWhatsApp}?text=${mensajeCodificado}`;
        window.open(urlWhatsApp, "_blank");
        
        setSelectedTime(null);
        setDate(null); // Limpiamos la fecha
        setFormData({ nombre: '', apellidos: '', asunto: '' });
    };
    
    // Formateador para el título de la sección de horas
    const formattedDateForTitle = date?.toLocaleDateString('es-ES', { 
        weekday: 'long', day: 'numeric', month: 'long' 
    });

    // Capitalizar la primera letra del título
    const capitalizedTitle = formattedDateForTitle
        ? formattedDateForTitle.charAt(0).toUpperCase() + formattedDateForTitle.slice(1)
        : 'Selecciona un día';

    return (
        <div className="scheduler-widget-custom">
            
            {/* --- PASO 1: CALENDARIO (Izquierda) --- */}
            <div className="calendar-container-custom">
                {/* ¡AQUÍ ESTÁ EL REEMPLAZO!
                  Usamos tu componente en lugar de <Calendar>
                */}
                <CustomCalendar
                    selectedDate={date}
                    onDateChange={handleDateChange}
                />
            </div>

            {/* --- PASO 2 Y 3: HORAS Y FORMULARIO (LÓGICA ACTUALIZADA) --- */}
            {date ? (
                // SI HAY FECHA SELECCIONADA (Lo que ya tenías)
                <>
                    <div className="timeslot-container-custom bg-[#1A1A1A] rounded-xl border border-[var(--color-borde)] p-6 flex flex-col">
                        <h3>{capitalizedTitle}</h3>
                        <div className="time-slots flex-1">
                            {mockAvailableTimes.map(time => (
                                <button
                                    key={time}
                                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                                    onClick={() => setSelectedTime(time)}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* El formulario aparece solo si se ha seleccionado fecha Y hora */}
                    {selectedTime && (
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <h3>Datos para la Reunión</h3>
                            <p>Reunión el {capitalizedTitle} a las {selectedTime}</p>
                            
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="asunto">Asunto de la reunión</label>
                                <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleInputChange} required />
                            </div>
                            
                            <button type="submit" className="submit-booking-btn">
                                Confirmar y Enviar por WhatsApp
                            </button>
                        </form>
                    )}
                </>
            ) : (
                // SI NO HAY FECHA SELECCIONADA (¡NUEVO!)
                // Renderizamos un "placeholder" para mantener el layout.
                // Usamos las mismas clases de layout para que ocupe el mismo espacio.
<div className="timeslot-container-custom bg-[#1A1A1A] rounded-xl border border-[var(--color-borde)] p-6 flex flex-col">                    <div className="timeslot-placeholder flex-1">
                        <p>Selecciona un día en el calendario para ver las horas disponibles.</p>
                    </div>
                </div>
            )}
        </div>
    );
}