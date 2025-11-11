// app/page.tsx
import Header from "./components/Header";
// 1. Importa tu nuevo componente
import CustomBooking from "./components/CustomBooking"; 


export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <section className="booking-section">
          <h1>Agendar una reunión</h1>
          <p>
            A continuación puede encontrar la lista de intervalos de horas 
            disponible para Reunión personal para toma de contacto e 
            información con Bartolomé Rubio. Haga clic en una ranura 
            de hora para proceder con la cita.
          </p>

          {/* 2. Usa tu componente personalizado aquí */}
          <CustomBooking />

        </section>
      </main>
    </>
  );
}