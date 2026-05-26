'use client';

import React from 'react';

export default function Services() {

  const workflowStages = [
    {
      step: "01",
      title: "Evaluación Clínica Acreditada",
      desc: "Exámenes de agudeza visual y refracción digital en terreno ejecutados por Optometristas y Tecnólogos Médicos inscritos en la Superintendencia de Salud. Screening preventivo para detección de fatiga ocular."
    },
    {
      step: "02",
      title: "Recetas Certificadas Inmediatas",
      desc: "Emisión y firma inmediata de recetas válidas al término de cada evaluación. En casos complejos, gestionamos informes clínicos de derivación oftalmológica oportuna para la seguridad del colaborador."
    },
    {
      step: "03",
      title: "Suministro y Ajuste Ergonómico",
      desc: "Despachamos y adaptamos los lentes directamente en los puestos de trabajo de la empresa, asegurando la máxima productividad visual."
    }
  ];

  return (
    <section id="servicios" className="w-full bg-white py-20 lg:py-28 relative overflow-hidden">
      
      {/* CONTENEDOR DE FONDO ABSOLUTO (LA IMAGEN COMPLETA DE EXTREMO A EXTREMO) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/personas-feas.png" 
          alt="Clínicos fundadores y equipamiento de Óptica Nexo" 
          className="w-full h-full object-cover object-right select-none pointer-events-none"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95 lg:bg-gradient-to-r lg:from-white lg:via-white/40 lg:to-transparent" />
      </div>

      {/* CONTENIDO DEL FLUJO OPERATIVO */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN (Alineada sobre la zona blanca difuminada) */}
          <div className="lg:col-span-6 space-y-12 py-4">
            
            {/* Encabezado corporativo premium */}
            <div className="space-y-4">

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nexo-dark tracking-tight leading-none">
                Nuestros Operativos
              </h2>
              <p className="text-slate-700 text-sm sm:text-base font-semibold max-w-xl leading-relaxed">
                Abordamos desde el tamizaje médico hasta el suministro logístico final, optimizando la salud visual de tus colaboradores sin que tengan que salir de la empresa.
              </p>
            </div>

            {/* Listado de etapas interconectadas */}
            <div className="space-y-8 relative before:absolute before:inset-y-2 before:left-4 before:w-[1px] before:bg-slate-200">
              {workflowStages.map((stage, idx) => (
                <div key={idx} className="relative pl-12 group">
                  
                  {/* Indicador Numérico */}
                  <div className="absolute left-0 top-0.5 w-8 h-8 rounded-lg bg-white border border-slate-200 text-nexo-dark group-hover:bg-nexo-dark group-hover:text-white group-hover:border-nexo-dark flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-xs">
                    {stage.step}
                  </div>

                  {/* Textos con alto contraste */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-nexo-dark group-hover:text-nexo-cyan transition-colors duration-200">
                      {stage.title}
                    </h3>
                    <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                      {stage.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* COLUMNA DERECHA VACÍA: Reserva el 50% de la pantalla para dejar ver a las personas limpiamente */}
          <div className="hidden lg:block lg:col-span-6 pointer-events-none h-full min-h-[450px]" />

        </div>
      </div>

    </section>
  );
}