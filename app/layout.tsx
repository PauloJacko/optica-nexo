// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header"; 
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Óptica Nexo | Salud Visual Empresarial",
  description: "Servicios ópticos integrales para empresas. Impulsamos la productividad de tus trabajadores cuidando su salud visual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900 flex flex-col min-h-screen">
        
        {/* Header con menú y modal integrado para todo el sitio */}
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}