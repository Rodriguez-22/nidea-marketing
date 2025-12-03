// /app/layout.tsx (CORREGIDO)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 👇 ¡Next.js inyectará automáticamente el Favicon desde aquí!
export const metadata: Metadata = {
  title: "Marina Tarot | Guía Espiritual y Terapias",
  description: "Lecturas, Registros Akáshicos y Terapias de Sanación.",
  icons: {
    icon: '/favicon.ico', // O la ruta de tu nuevo icono
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
        {/* ❌ NO USES ESTA ETIQUETA EN APP ROUTER, BORRA EL BLOQUE DE ABAJO ❌ */}
        {/* <head> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        </head> */}

        {/* ✅ Si quieres usar Font Awesome, la forma correcta es importarlo en el componente <Header /> 
           o directamente en el archivo globals.css, o usar una etiqueta <link> separada para metadatos, 
           aunque Next.js prefiere su propio manejo de metadatos. */}

      <body className={inter.className}>
        <Header /> 
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}