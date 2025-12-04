// En rodriguez-22/nidea-marketing/nidea-marketing-90cd82629267443ecc736288e2894ed49fafc54d/app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // ⬅️ DEBE USAR POPPINS
import Header from "./components/Header"; 
import "./globals.css";

// ⬅️ DEFINICIÓN DE POPPINS
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"] }); 

// ... (resto del metadata)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}> {/* ⬅️ DEBE USAR poppins.className */}
        <Header /> 
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}