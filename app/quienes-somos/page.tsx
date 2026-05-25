import React from 'react';
import Image from 'next/image';

export default function QuienesSomosPage() {
  const equipo = [
    {
      nombre: 'Mauricio Tapia Villarroel',
      cargo: 'Gerente General',
      especialidad: 'Especialista en Venta Óptica Corporativa',
      imagen: '/images/mauricio_pros.jpg',
    },
    {
      nombre: 'Cristobal Maurens Silva',
      cargo: 'Director Ejecutivo',
      especialidad: 'TMO Optometría / Tecnólogo Médico',
      imagen: '/images/cristobal_pros.jpg',
    },
  ];

  return (
    <div className="w-full bg-slate-50/40 font-sans selection:bg-nexo-cyan/20 min-h-screen">
      
      {/* SECCIÓN PRINCIPAL: QUIENES SOMOS (3 TARJETAS) */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* TÍTULO PRINCIPAL */}
        <div className="text-center space-y-3">
          <span className="text-xs mb-5 font-bold text-nexo-cyan uppercase tracking-widest bg-nexo-cyan/10 px-3 py-1.5 rounded-full">
            Nuestra Identidad
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mt-5 text-nexo-dark tracking-tight leading-none">
            Quiénes Somos
          </h1>
        </div>

        {/* RECUADROS DE MISIÓN, VISIÓN Y VALORES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tarjeta 1: Misión */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="text-2xl bg-nexo-dark text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-sm mx-auto">
              🎯
            </div>
            <h2 className="text-xl font-black text-nexo-dark tracking-tight w-full">Misión</h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Proporcionar soluciones ópticas de alta calidad, brindando acceso a una atención especializada para mejorar la salud visual de nuestros clientes en todo el país.
            </p>
          </div>

          {/* Tarjeta 2: Visión */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="text-2xl bg-nexo-cyan text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-sm mx-auto">
              👁️
            </div>
            <h2 className="text-xl font-black text-nexo-dark tracking-tight w-full">Visión</h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Aspiramos a ser líderes en el campo de la salud visual, reconocidos por nuestra atención integral, la innovación constante en nuestros servicios, y nuestro compromiso con el bienestar de cada persona.
            </p>
          </div>

          {/* Tarjeta 3: Valores */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <div className="text-2xl bg-emerald-500 text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-sm mx-auto">
              ✔
            </div>
            <h2 className="text-xl font-black text-nexo-dark tracking-tight text-center w-full">Valores</h2>
            <ul className="space-y-2 text-slate-500 text-xs sm:text-sm font-semibold self-start md:self-auto w-full px-2">
              <li className="flex items-start gap-2 text-left">
                <span className="text-nexo-cyan mt-0.5 shrink-0">▪</span> <span>Compromiso con la calidad y servicio profesional.</span>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="text-nexo-cyan mt-0.5 shrink-0">▪</span> <span>Confianza y responsabilidad personalizada.</span>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="text-nexo-cyan mt-0.5 shrink-0">▪</span> <span>Innovación en soluciones ópticas globales.</span>
              </li>
              <li className="flex items-start gap-2 text-left">
                <span className="text-nexo-cyan mt-0.5 shrink-0">▪</span> <span>Pasión por la salud y el bienestar visual.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECCIÓN NUESTRO EQUIPO EJECUTIVO */}
      <section className="pb-24 max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-nexo-cyan uppercase tracking-widest">Respaldo Técnico</span>
          <h2 className="text-3xl font-black text-nexo-dark tracking-tight">Nuestro Equipo Ejecutivo</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {equipo.map((miembro, idx) => (
            <div key={idx} className="group bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              
              {/* Contenedor de la Imagen */}
              <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
                <Image
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={true}
                />
              </div>

              {/* Información Ejecutiva */}
              <div className="p-6 space-y-3 flex-grow border-t border-slate-100 bg-white">
                <div>
                  <span className="text-xs font-bold text-nexo-cyan uppercase tracking-wider">
                    {miembro.cargo}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-nexo-dark tracking-tight leading-snug">
                    {miembro.nombre}
                  </h3>
                </div>
                
                {/* Contenedor de Especialidad arreglado sin truncate */}
                <div className="pt-2.5 border-t border-slate-100/80 flex flex-col md:flex-row md:items-start gap-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mt-0.5">
                    Especialidad:
                  </span>
                  <p className="text-slate-600 text-xs font-bold leading-normal">
                    {miembro.especialidad}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
