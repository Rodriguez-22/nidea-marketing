'use client'; 

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';

// --- Función de utilidad para NORMALIZAR la fecha (CORRECCIÓN CLAVE DE ZONA HORARIA) ---
// Establece la fecha a medianoche (00:00:00) en la zona horaria local del usuario, 
// eliminando el desfase de Vercel (UTC) al comparar si un día es pasado o futuro.
const normalizeDate = (date: Date): number => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0); // Fija la hora a medianoche
    return d.getTime(); // Devuelve el timestamp (número de milisegundos)
};

// --- CustomCalendar Component (Integrado) ---
interface CustomCalendarProps {
    selectedDate: Date | null;
    onDateChange: (date: Date) => void;
}

const CustomCalendar = ({ selectedDate, onDateChange }: CustomCalendarProps) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    
    // Obtenemos la fecha de "hoy" normalizada solo una vez
    const todayTimestamp = useMemo(() => normalizeDate(new Date()), []);

    const calendarDates = useMemo(() => {
        // Lógica para generar las fechas del calendario...
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        
        const startDayIndex = firstDayOfMonth.getDay(); 
        
        const dates: (Date | null)[] = [];

        // Días anteriores (filler)
        for (let i = startDayIndex; i > 0; i--) {
            dates.push(null); 
        }

        // Días del mes actual
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            dates.push(new Date(year, month, i));
        }

        // Rellenar cuadrícula
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
        // Comparamos el día normalizado con el día de hoy normalizado (sin importar la hora)
        const dateTimestamp = normalizeDate(date);
        return dateTimestamp < todayTimestamp;
    };

    const isSelected = (date: Date) => {
        if (!selectedDate) return false;
        return normalizeDate(date) === normalizeDate(selectedDate);
    };

    return (
        <div className="p-4 w-full bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <header className="flex justify-between items-center mb-4">
                <button 
                    onClick={() => changeMonth(-1)} 
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150"
                    aria-label="Mes anterior"
                >
                    <ChevronLeft size={20} />
                </button>
                <h2 className="text-xl font-semibold">
                    {currentMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                </h2>
                <button 
                    onClick={() => changeMonth(1)} 
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150"
                    aria-label="Mes siguiente"
                >
                    <ChevronRight size={20} />
                </button>
            </header>

            <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
                {days.map(day => (
                    <div key={day} className="text-sm font-bold text-gray-500 dark:text-gray-400">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 mt-2">
                {calendarDates.map((date, index) => {
                    if (!date) {
                        return <div key={index} className="h-10 w-full"></div>;
                    }
                    
                    const past = isDatePast(date);
                    const today = normalizeDate(date) === todayTimestamp;
                    const selected = isSelected(date);

                    return (
                        <button
                            key={index}
                            onClick={() => onDateChange(date)}
                            disabled={past}
                            className={`
                                h-10 w-full flex items-center justify-center rounded-full transition duration-150 ease-in-out 
                                ${past 
                                    ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                    : 'hover:bg-indigo-100 dark:hover:bg-indigo-700'
                                }
                                ${selected && !past 
                                    ? 'bg-indigo-600 text-white font-bold shadow-md hover:bg-indigo-700' 
                                    : ''
                                }
                                ${today && !selected && !past 
                                    ? 'border-2 border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold' 
                                    : ''
                                }
                                ${!selected && !past && !today 
                                    ? 'text-gray-800 dark:text-gray-200'
                                    : ''
                                }
                            `}
                        >
                            {date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

// --- Horas disponibles SIMULADAS ---
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
        const tuNumeroWhatsApp = "34607929902"; 

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
        setDate(null); 
        setFormData({ nombre: '', apellidos: '', asunto: '' });
    };
    
    const formattedDateForTitle = date?.toLocaleDateString('es-ES', { 
        weekday: 'long', day: 'numeric', month: 'long' 
    });

    const capitalizedTitle = formattedDateForTitle
        ? formattedDateForTitle.charAt(0).toUpperCase() + formattedDateForTitle.slice(1)
        : 'Selecciona un día';

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
                Sistema de Reserva de Reuniones
            </h1>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* --- PASO 1: CALENDARIO (Columna 1) --- */}
                <div className="lg:col-span-1">
                    <CustomCalendar
                        selectedDate={date}
                        onDateChange={handleDateChange}
                    />
                </div>

                {/* --- PASO 2 Y 3: HORAS Y FORMULARIO (Columna 2 y 3) --- */}
                {date ? (
                    <>
                        {/* --- PASO 2: HORAS (Columna 2) --- */}
                        <div className="lg:col-span-1 timeslot-container-custom bg-[#1A1A1A] text-white rounded-xl border border-gray-700 p-6 flex flex-col shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">{capitalizedTitle}</h3>
                            <div className="time-slots grid grid-cols-2 gap-3 flex-1 overflow-y-auto">
                                {mockAvailableTimes.map(time => (
                                    <button
                                        key={time}
                                        className={`p-3 rounded-lg font-medium transition duration-200 shadow-md
                                            ${selectedTime === time 
                                                ? 'bg-indigo-600 text-white transform scale-105' 
                                                : 'bg-gray-700 text-gray-100 hover:bg-indigo-500 hover:shadow-xl'
                                            }
                                        `}
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* --- PASO 3: FORMULARIO (Columna 3) --- */}
                        {selectedTime && (
                            <form className="lg:col-span-1 booking-form bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg" onSubmit={handleSubmit}>
                                <h3 className="text-2xl font-semibold mb-2">Datos para la Reunión</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                    Reunión el **{capitalizedTitle}** a las **{selectedTime}**
                                </p>
                                
                                <div className="space-y-4">
                                    {['nombre', 'apellidos', 'asunto'].map(field => (
                                        <div className="form-group" key={field}>
                                            <label htmlFor={field} className="block text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                                                {field.charAt(0).toUpperCase() + field.slice(1)} {field === 'asunto' ? 'de la reunión' : ''}
                                            </label>
                                            <input 
                                                type="text" 
                                                id={field} 
                                                name={field} 
                                                value={formData[field as keyof typeof formData]} 
                                                onChange={handleInputChange} 
                                                required 
                                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
                                            />
                                        </div>
                                    ))}
                                </div>
                                
                                <button type="submit" className="submit-booking-btn mt-6 w-full flex justify-center items-center py-3 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200">
                                    <Send size={20} className="mr-2" />
                                    Confirmar y Enviar por WhatsApp
                                </button>
                            </form>
                        )}
                    </>
                ) : (
                    // --- Placeholder para Horas y Formulario (Columna 2 y 3) ---
                    <div className="lg:col-span-2 flex items-center justify-center h-full min-h-[300px] bg-gray-800 dark:bg-gray-800 rounded-xl border border-gray-700 p-6 text-gray-400 shadow-inner">                     
                        <p className="text-xl">
                            Selecciona un día en el calendario para ver las horas disponibles.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}