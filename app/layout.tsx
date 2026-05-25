// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer"; // Mantenemos el Footer global si deseas

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
    <html lang="es">
      <body className="antialiased bg-white text-slate-900">
        {children}
        <Footer />
      </body>
    </html>
  );
}