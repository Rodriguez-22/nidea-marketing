// app/contacto/page.tsx
import CustomBooking from "../components/CustomBooking"; 

// Metadata específica para esta página
export const metadata = {
    title: "Contacto | Marina Tarot",
    description: "Agenda tu reunión personal con Bartolomé Rubio para una consulta.",
};

export default function ContactoPage() {
  return (
    // Reutilizamos la clase 'booking-section' para centrado y márgenes
    <section className="booking-section">
        <h1>Agendar una reunión</h1>
        <p>
            A continuación puede encontrar la lista de intervalos de horas 
            disponible para Reunión personal para toma de contacto e 
            información con Bartolomé Rubio. Haga clic en una ranura 
            de hora para proceder con la cita.
        </p>
        <CustomBooking />
    </section>
  );
}