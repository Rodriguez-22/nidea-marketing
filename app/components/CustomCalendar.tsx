"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CalendarProps {
  selectedDate: Date | null
  onDateChange: (date: Date) => void
}

// 1. Obtenemos la fecha de "hoy" y la "normalizamos"
// (quitamos la hora, para que "hoy" empiece a las 00:00)
const today = new Date();
today.setHours(0, 0, 0, 0);

export default function CustomCalendar({ selectedDate, onDateChange }: CalendarProps) {
  
  // 2. El calendario ahora EMPIEZA en el mes actual, no en Octubre 2025
  const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth()))

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return day === 0 ? 6 : day - 1; // Mueve Dom (0) al final (6)
  }

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
  ]

  const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

  const days = []
  
  // --- Lógica de disponibilidad actualizada ---

  // Días del mes anterior
  const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
  const daysInPrevMonth = getDaysInMonth(prevMonthDate);
  const firstDay = getFirstDayOfMonth(currentMonth);
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    const dayDate = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), day);
    dayDate.setHours(0, 0, 0, 0); // Normalizamos

    days.push({
      day: day,
      month: prevMonthDate.getMonth(),
      year: prevMonthDate.getFullYear(),
      currentMonth: false,
      isAvailable: dayDate >= today, // 3. Comprobamos si es futuro
    })
  }

  // Días del mes actual
  const daysInMonth = getDaysInMonth(currentMonth);
  for (let i = 1; i <= daysInMonth; i++) {
    const dayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
    dayDate.setHours(0, 0, 0, 0); // Normalizamos

    days.push({
      day: i,
      month: currentMonth.getMonth(),
      year: currentMonth.getFullYear(),
      currentMonth: true,
      isAvailable: dayDate >= today, // 3. Comprobamos si es futuro
    })
  }

  // Días del siguiente mes
  const nextMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    const dayDate = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), i);
    dayDate.setHours(0, 0, 0, 0); // Normalizamos

    days.push({
      day: i,
      month: nextMonthDate.getMonth(),
      year: nextMonthDate.getFullYear(),
      currentMonth: false,
      isAvailable: dayDate >= today, // 3. Comprobamos si es futuro
    })
  }
  // --- Fin de la lógica de disponibilidad ---


  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      
      {/* Encabezado de Mes/Año */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={handlePrevMonth} className="p-1 text-gray-400 hover:text-gray-600 rounded transition">
          <ChevronLeft size={20} /> 
        </button>
        <span className="text-gray-800 font-semibold text-lg">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </span>
        <button onClick={handleNextMonth} className="p-1 text-gray-400 hover:text-gray-600 rounded transition">
          <ChevronRight size={20} /> 
        </button>
      </div>

      {/* Nombres de los días */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-gray-700">
            {day}
          </div>
        ))}
      </div>

      {/* Rejilla de días */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((dayObj, index) => {
          const dayDate = new Date(dayObj.year, dayObj.month, dayObj.day);
          const isSelected = selectedDate && 
                             selectedDate.getDate() === dayObj.day && 
                             selectedDate.getMonth() === dayObj.month &&
                             selectedDate.getFullYear() === dayObj.year;

          return (
            <button
              key={index}
              onClick={() => {
                // Solo permitimos seleccionar si es del mes actual Y está disponible
                if (dayObj.isAvailable && dayObj.currentMonth) {
                  onDateChange(new Date(dayObj.year, dayObj.month, dayObj.day))
                }
              }}
              // Deshabilitamos si no es del mes actual O si no está disponible (es pasado)
              disabled={!dayObj.currentMonth || !dayObj.isAvailable}
              className={`
                aspect-square text-sm rounded-full transition relative
                ${!dayObj.currentMonth ? "text-gray-300 cursor-not-allowed" : ""}
                ${dayObj.currentMonth && !dayObj.isAvailable ? "text-gray-400 cursor-not-allowed" : ""}
                ${dayObj.currentMonth && dayObj.isAvailable ? "text-gray-800 hover:bg-gray-100 cursor-pointer" : ""}
                ${isSelected ? "bg-[var(--color-verde)] text-white font-bold" : ""}
                {/* 4. HEMOS QUITADO el "font-bold" para los días 30 y 31 */}
              `}
            >
              {dayObj.day}
            </button>
          )
        })}
      </div>
    </div>
  )
}