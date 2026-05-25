import React from 'react';

export default function Services() {
  const servicesList = [
    { 
      title: "Pruebas Optométricas", 
      desc: "Exámenes completos de agudeza visual y refracción digital ejecutados bajo estrictos protocolos clínicos.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    { 
      title: "Evaluaciones Complementarias", 
      desc: "Detección temprana de patologías comunes como vicios de refracción, fatiga ocular y screening preventivo.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    { 
      title: "Recetas Ópticas al Instante", 
      desc: "Emisión y firma inmediata de recetas válidas por profesionales certificados al finalizar cada evaluación.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      title: "Profesionales Acreditados", 
      desc: "Equipo clínico compuesto por Optometristas y Tecnólogos Médicos debidamente inscritos en la Superintendencia de Salud.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      title: "Entrega de Lentes Operativos", 
      desc: "Servicio llave en mano. Despachamos y ajustamos los lentes directamente en los puestos de trabajo sin fricción.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    { 
      title: "Derivación Oftalmológica", 
      desc: "Canalización rápida e informes clínicos detallados para derivar de forma oportuna los casos de mayor complejidad.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicios" className="w-full bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 py-24 px-6 sm:px-8 relative overflow-hidden">
      
      {/* Destellos estéticos sutiles de fondo (Look tecnológico) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-nexo-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ENCABEZADO DE SECCIÓN PREMIUM */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-nexo-cyan bg-nexo-cyan/5 px-3 py-1.5 rounded-full">
            Especialidades Médicas y Logísticas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nexo-dark tracking-tight leading-tight">
            Nuestra Solución Integral en Terreno
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed">
            Abordamos todo el flujo del cuidado de la visión desde un estándar clínico avanzado, diseñado exclusivamente para el entorno corporativo.
          </p>
        </div>

        {/* GRILLA DE SERVICIOS DINÁMICA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((srv, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 rounded-2xl border border-slate-100/80 shadow-xl shadow-slate-150/20 hover:shadow-2xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Contenedor del Icono que reacciona al Hover */}
                <div className="bg-slate-50 text-nexo-dark group-hover:bg-nexo-dark group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs">
                  {srv.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-nexo-dark tracking-tight group-hover:text-nexo-cyan transition-colors duration-250">
                    {srv.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {srv.desc}
                  </p>
                </div>
              </div>

              {/* Indicador sutil corporativo en la parte inferior */}
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center text-xs font-bold text-nexo-cyan uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Protocolo Nexo</span>
                <svg className="h-3 w-3 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}