'use client';

import React, { useState, useEffect } from 'react';

// Sub-componente interno para manejar la animación fluida de los números
function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(totalMiliseconds / frameRate);
    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      // Función de desaceleración (easeOutQuad) para que frene suavemente al final
      const progress = currentFrame / totalFrames;
      const easeProgress = progress * (2 - progress);
      
      const currentCount = Math.round(easeProgress * end);
      
      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [target, duration]);

  // Formatear con puntos de miles para Chile (ej: 12.000)
  return <>{count.toLocaleString('es-CL')}</>;
}

export default function Benefits() {
  const stats = [
    { target: 12000, prefix: "+", label: "Personas Atendidas" },
    { target: 16, prefix: "", label: "Regiones de Chile" },
    { target: 13000, prefix: "+", label: "Lentes Entregados" }
  ];

  const benefits = [
    {
      title: "Atención en Terreno",
      desc: "Despliegue clínico completo directamente en tus instalaciones. Diseñado estratégicamente para eliminar traslados y optimizar los tiempos de tu equipo.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Cobertura Nacional",
      desc: "Presencia real y uniforme de norte a sur. Garantizamos operativos con los mismos estándares de eficiencia clínica en cualquier sucursal del país.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Convenios Corporativos",
      desc: "Planes corporativos flexibles a la medida de tu presupuesto. Soluciones visuales de financiamiento compartido para el cuidado preventivo continuo.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Clínica de Alta Gama",
      desc: "Equipamiento clínico-tecnológico avanzado operado por profesionales acreditados, logrando diagnósticos rápidos y recetas 100% confiables.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="quienes-somos" className="w-full bg-gradient-to-b from-white via-slate-50/40 to-white py-24 px-6 sm:px-8 relative overflow-hidden">
      
      {/* Detalle estético de fondo */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-nexo-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ENCABEZADO ESTILIZADO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-nexo-cyan">
              Valor Estratégico
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nexo-dark tracking-tight">
              ¿Por qué confiar la salud visual en <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexo-dark to-slate-700">NEXO</span>?
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-sm md:text-right leading-relaxed">
            Combinamos logística avanzada en terreno y tecnología clínica para proteger el rendimiento de tu capital humano.
          </p>
        </div>

        {/* NUEVA DISTRIBUCIÓN HORIZONTAL PREMIUM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LADO IZQUIERDO: PILARES DE SERVICIO (8 de 12 columnas) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div 
                key={i} 
                className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/40 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="bg-nexo-cyan/5 text-nexo-cyan group-hover:bg-nexo-cyan group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300">
                  {b.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-nexo-dark tracking-tight">{b.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* LADO DERECHO: PANEL VERTICAL DE METRICAS EN TIEMPO REAL (4 de 12 columnas) */}
          <div className="lg:col-span-4 bg-nexo-dark text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-850 flex flex-col justify-center divide-y divide-slate-800 min-h-[440px]">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className={`flex flex-col justify-center py-6 ${i === 0 ? 'pt-0' : ''} ${i === stats.length - 1 ? 'pb-0' : ''}`}
              >
                <span className="text-4xl sm:text-5xl font-black text-nexo-cyan tracking-tight tabular-nums">
                  {stat.prefix}
                  <AnimatedCounter target={stat.target} />
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}