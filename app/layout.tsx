// rodriguez-22/nidea-marketing/nidea-marketing-75444c63efc2441cbb09bfbd29fe5bd6d1351c9f/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Importación del Header
import Header from "./components/Header"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marina Tarot | Guía Espiritual y Terapias",
  description: "Lecturas, Registros Akáshicos y Terapias de Sanación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* ¡AÑADE ESTA LÍNEA PARA LOS ICONOS! */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      <body className={inter.className}>
        
        {/* AÑADIMOS EL HEADER AQUÍ PARA QUE SEA ÚNICO Y GLOBAL */}
        <Header /> 
        
        {/* El contenido de la página se renderiza abajo */}
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}