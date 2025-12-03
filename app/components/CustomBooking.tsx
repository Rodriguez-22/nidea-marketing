'use client'; 

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';

// --- Función de utilidad para NORMALIZAR la fecha (CORRECCIÓN DE ZONA HORARIA) ---
const normalizeDate = (date: Date): number => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0); 
    return d.getTime(); 
};
const getDayKey = (date: Date): string => date.toISOString().split('T')[0];

// --- CustomCalendar Component (Limpiado de estilos de Tailwind, solo clases CSS para estructura) ---
interface CustomCalendarProps {
    selectedDate: Date | null;
    onDateChange: (date: Date) => void;
}

const CustomCalendar = ({ selectedDate, onDateChange }: CustomCalendarProps) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    
    const todayTimestamp = useMemo(() => normalizeDate(new Date()), []);

    const calendarDates = useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        
        const startDayIndex = firstDayOfMonth.getDay(); 
        
        const dates: (Date | null)[] = [];

        for (let i = startDayIndex; i > 0; i--) {
            dates.push(null); 
        }

        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            dates.push(new Date(year, month, i));
        }

        while (dates.length % 7 !== 0 || dates.length < 35) {
            dates.push(null);
        }

        return dates;
    }, [currentMonth]);

    const changeMonth = (delta: number) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(currentMonth.getMonth() + delta);
        setCurrentMonth(newMonth);
    };

    const isDatePast = (date: Date) => {
        const dateTimestamp = normalizeDate(date);
        return dateTimestamp < todayTimestamp;
    };
    
    // --- Lógica: SÁBADOS Y DOMINGOS DESHABILITADOS ---
    const isWeekend = (date: Date) => {
        const day = date.getDay(); // 0 = Domingo, 6 = Sábado
        return day === 0 || day === 6;
    };

    const isSelected = (date: Date) => {
        if (!selectedDate) return false;
        return normalizeDate(date) === normalizeDate(selectedDate);
    };

    return (
        <div className="custom-calendar-container">
            <header className="custom-calendar-header">
                <button 
                    onClick={() => changeMonth(-1)} 
                    aria-label="Mes anterior"
                    className="custom-calendar-nav-btn"
                >
                    <ChevronLeft size={20} />
                </button>
                <h2 className="custom-calendar-title">
                    {currentMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                </h2>
                <button 
                    onClick={() => changeMonth(1)} 
                    aria-label="Mes siguiente"
                    className="custom-calendar-nav-btn"
                >
                    <ChevronRight size={20} />
                </button>
            </header>

            <div className="custom-calendar-weekdays">
                {days.map(day => (
                    <div key={day} className="custom-calendar-weekday">
                        {day}
                    </div>
                ))}
            </div>

            <div className="custom-calendar-dates">
                {calendarDates.map((date, index) => {
                    if (!date) {
                        return <div key={index} className="custom-calendar-empty"></div>;
                    }
                    
                    const past = isDatePast(date);
                    const weekend = isWeekend(date); // Nueva comprobación de fin de semana
                    const today = normalizeDate(date) === todayTimestamp;
                    const selected = isSelected(date);
                    
                    // Si es pasado o fin de semana, está deshabilitado
                    const isDisabled = past || weekend; 
                    
                    let dayClass = 'custom-calendar-day';
                    if (past) dayClass += ' past';
                    if (today) dayClass += ' today';
                    if (selected) dayClass += ' selected';
                    if (weekend) dayClass += ' past'; // Usamos la clase 'past' para que se vea deshabilitado
                    

                    return (
                        <button
                            key={index}
                            onClick={() => onDateChange(date)}
                            disabled={isDisabled}
                            className={dayClass}
                        >
                            {date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

// --- Horas disponibles SIMULADAS (Base) ---
const mockAvailableTimes = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00'
];

// --- CustomBooking Component (Main) ---
export default function CustomBooking() {
    
    const [date, setDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        asunto: '',
    });
    
    // --- ESTADO DE RESERVAS SIMULADAS ---
    // Clave: 'YYYY-MM-DD', Valor: Array de horas reservadas ['HH:MM', 'HH:MM']
    const [bookedSlots, setBookedSlots] = useState<{ [key: string]: string[] }>({
        // Ejemplo de la reserva que pediste: 11 de Diciembre
        '2025-12-11': ['10:00', '11:00'], 
        '2025-12-12': ['15:00'], 
    });
    // ------------------------------------

    const isTodaySelected = date && normalizeDate(date) === normalizeDate(new Date());

    // --- LÓGICA: Deshabilitar horas pasadas si es HOY ---
    const isTimePast = (time: string): boolean => {
        if (!isTodaySelected) return false;

        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        const [mockHourStr, mockMinuteStr] = time.split(':');
        const mockHour = parseInt(mockHourStr, 10);
        const mockMinute = parseInt(mockMinuteStr, 10);

        const currentTimeInMinutes = currentHour * 60 + currentMinute;
        const mockTimeInMinutes = mockHour * 60 + mockMinute;

        // Se permite reservar hasta 15 minutos en el futuro
        return mockTimeInMinutes < (currentTimeInMinutes + 15);
    };


    const handleDateChange = (newDate: Date) => {
        setDate(newDate);
        setSelectedTime(null); 
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
        if (!date || !selectedTime) return;

        const tuNumeroWhatsApp = "34607929902"; 

        const formattedDate = date?.toLocaleDateString('es-ES', { 
            day: 'numeric', weekday: 'long', month: 'long', year: 'numeric' 
        });

        let mensaje = `¡Hola! 👋 Quisiera reservar una reunión:\n\n` +
                      `*Fecha y Día:* ${formattedDate}\n` +
                      `*Hora:* ${selectedTime}\n` +
                      `----------\n` +
                      `*Nombre:* ${formData.nombre}\n` +
                      `*Apellidos:* ${formData.apellidos}\n` +
                      `*Asunto:* ${formData.asunto}`;
        let mensajeCodificado = encodeURIComponent(mensaje);
        const urlWhatsApp = `https://wa.me/${tuNumeroWhatsApp}?text=${mensajeCodificado}`;
        window.open(urlWhatsApp, "_blank");
        
        // --- LÓGICA DE SIMULACIÓN DE RESERVA POST-ENVÍO ---
        const dayKey = getDayKey(date);
        setBookedSlots(prev => ({
            ...prev,
            [dayKey]: [...(prev[dayKey] || []), selectedTime]
        }));
        // ---------------------------------------------------

        setSelectedTime(null);
        setDate(null); 
        setFormData({ nombre: '', apellidos: '', asunto: '' });
    };
    
    // --- LÓGICA: FILTRADO DE HORAS YA RESERVADAS ---
    const availableTimes = useMemo(() => {
        if (!date) return [];
        const dayKey = getDayKey(date);
        const bookedTimes = bookedSlots[dayKey] || [];
        
        return mockAvailableTimes.filter(time => !bookedTimes.includes(time));
    }, [date, bookedSlots]);
    // ----------------------------------------------


    const formattedDateForTitle = date?.toLocaleDateString('es-ES', { 
        weekday: 'long', day: 'numeric', month: 'long' 
    });

    const capitalizedTitle = formattedDateForTitle
        ? formattedDateForTitle.charAt(0).toUpperCase() + formattedDateForTitle.slice(1)
        : 'Selecciona un día';


    return (
        <div className="booking-section">
            
            <div className={`scheduler-widget-custom main-aesthetic-container`}>
                
                {/* --- PASO 1: CALENDARIO (Columna 1) --- */}
                <div className={`calendar-container-custom module-container`}>
                    <CustomCalendar
                        selectedDate={date}
                        onDateChange={handleDateChange}
                    />
                </div>

                {/* --- PASO 2 Y 3: HORAS Y FORMULARIO (Columna 2 y 3) --- */}
                {date ? (
                    <>
                        {/* --- PASO 2: HORAS (Columna 2) --- */}
                        <div className={`timeslot-container-custom module-container`}>
                            <h3 className="time-title-aesthetic">
                                {capitalizedTitle}
                            </h3>
                            <div className="time-slots">
                                {availableTimes.length > 0 ? (
                                    availableTimes.map(time => {
                                        const pastTime = isTimePast(time);
                                        
                                        let timeClass = 'time-slot';
                                        if (selectedTime === time) timeClass += ' selected';
                                        if (pastTime) timeClass += ' past-time';

                                        return (
                                            <button
                                                key={time}
                                                disabled={pastTime}
                                                className={timeClass}
                                                onClick={() => setSelectedTime(time)}
                                            >
                                                {time}
                                            </button>
                                        );
                                    })
                                ) : (
                                    <p className="placeholder-text">No hay horas disponibles para este día.</p>
                                )}
                            </div>
                        </div>

                        {/* --- PASO 3: FORMULARIO (Columna 3) --- */}
                        {selectedTime && (
                            <form className={`booking-form module-container`} onSubmit={handleSubmit}>
                                <h3 className="form-title-aesthetic">Datos para la Reunión</h3>
                                <p className="form-subtitle-aesthetic">Reunión el {capitalizedTitle} a las {selectedTime}</p>
                                
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="apellidos">Apellidos</label>
                                    <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleInputChange} required className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="asunto">Asunto de la reunión</label>
                                    <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleInputChange} required className="form-input" />
                                </div>
                                
                                <button type="submit" className={`submit-booking-btn submit-booking-btn-aesthetic`}>
                                    <Send size={20} className="mr-2 inline-block align-middle" />
                                    Confirmar y Enviar por WhatsApp
                                </button>
                            </form>
                        )}
                    </>
                ) : (
                    // --- Placeholder para Horas y Formulario ---
                    <div className={`timeslot-container-custom placeholder-only module-container`}>                     
                        <div className="timeslot-placeholder">
                            <p className="placeholder-text">Selecciona un día en el calendario para ver las horas disponibles.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}