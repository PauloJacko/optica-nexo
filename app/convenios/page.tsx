import React from 'react';
import Image from 'next/image';

export default function ConveniosPage() {
  // Listado de los logotipos que mencionaste
  const convenios = [
    { nombre: 'Fundación Integra', logo: '/images/logo-integra.png' },
    { nombre: 'Banco BCI', logo: '/images/logo-bci.png' },
    { nombre: 'Constructora Conosur', logo: '/images/logo-conosur.png' },
    { nombre: 'IPS', logo: '/images/logo-ips.png' },
    { nombre: 'Mineduc', logo: '/images/logo-mineduc.png' },
    { nombre: 'SAG', logo: '/images/logo-sag.png' },
  ];

  return (
    <div className="w-full bg-slate-50/40 font-sans selection:bg-nexo-cyan/20 min-h-screen flex flex-col justify-center">
      
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-6 sm:px-8 space-y-12 w-full">
        
        {/* ENCABEZADO MINIMALISTA */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-bold text-nexo-cyan uppercase tracking-widest bg-nexo-cyan/10 px-3 py-1.5 rounded-full">
            Alianzas Estratégicas
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mt-5 text-nexo-dark tracking-tight">
            Empresas e Instituciones con Convenio
          </h1>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Brindamos atención y soluciones de salud visual de alta calidad a los trabajadores y miembros de las principales organizaciones del país.
          </p>
        </div>

        {/* GRILLA DE LOGOS SIMPLES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
          {convenios.map((empresa, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-slate-200/60 rounded-2xl h-32 px-6 flex items-center justify-center shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-300"
            >
              <div className="relative w-full h-16 transition-all duration-300 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105">
                <Image
                  src={empresa.logo}
                  alt={`Logo convenio con ${empresa.nombre}`}
                  fill
                  sizes="(max-w-768px) 50vw, 33vw"
                  className="object-contain"
                  priority={idx < 3} // Carga prioritaria para los primeros logos en pantalla
                />
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}