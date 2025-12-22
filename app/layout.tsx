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
      <body className={inter.className}>
        <Header /> 
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}