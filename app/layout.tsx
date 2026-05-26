// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header"; 
import Footer from "@/components/layout/Footer";

// SEO Expandido sin romper tu configuración original
export const metadata: Metadata = {
  title: "Óptica Nexo | Salud Visual Empresarial",
  description: "Servicios ópticos integrales para empresas. Impulsamos la productividad de tus trabajadores cuidando su salud visual mediante operativos directos en tus instalaciones.",
  keywords: [
    "operativos opticos empresas chile",
    "salud visual corporativa",
    "lentes de seguridad con receta",
    "optica laboral chile",
    "operativos oftalmologicos rrhh",
    "optica nexo",
    "salud ocupacional visual"
  ],
  authors: [{ name: "Óptica Nexo" }],
  // Para cuando compartas el link por WhatsApp, LinkedIn o Facebook
  openGraph: {
    title: "Óptica Nexo | Salud Visual Empresarial",
    description: "Servicios ópticos integrales para empresas. Impulsamos la productividad cuidando su salud visual.",
    url: "https://www.opticanexo.cl",
    siteName: "Óptica Nexo",
    images: [
      {
        url: "/images/operativo.webp",
        width: 1200,
        height: 630,
        alt: "Operativos Ópticos Corporativos Óptica Nexo",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  // Para visualizaciones en Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Óptica Nexo | Salud Visual Empresarial",
    description: "Operativos ópticos directo en empresas en todo Chile.",
    images: ["/images/operativo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  }
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