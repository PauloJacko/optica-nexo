'use client';

import React from 'react';
import Image from 'next/image';

export default function ServiciosPage() {
  
  // Datos condensados y explicados en fácil para el flujo clínico
  const clinicaSteps = [
    { title: "Anamnesis Médica", desc: "Evaluación clínica inicial del historial visual de cada colaborador." },
    { title: "Autorefractometría", desc: "Examen digital automatizado para detectar Miopía, Astigmatismo e Hipermetropía." },
    { title: "Agudeza Visual Final", desc: "Determinación precisa de la receta óptica por un Tecnólogo Médico Universitario." },
    { title: "Exámenes Específicos", desc: "Screening preventivo de presión ocular, fondo de ojo y test de ojo seco." },
    { title: "Informe Clínico", desc: "Entrega inmediata de resultados personalizados y recomendaciones de salud laboral." }
  ];

  return (
    <div className="w-full bg-slate-50/50 font-sans selection:bg-nexo-cyan/20">
      
      {/* CONTENIDO PRINCIPAL */}
      <main className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
          
          {/* HEADER DE LA PÁGINA (¡CENTRADO AQUÍ!) */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black text-nexo-dark tracking-tight leading-none">
              Nuestra Oferta de Servicios Integrales
            </h1>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              Diseñamos operativos ópticos de alta resolución técnica directamente en las dependencias de tu empresa. Optimizamos la salud visual sin interrumpir la jornada laboral.
            </p>
          </div>

          {/* SECCIÓN 1: ATENCIÓN OFTALMOLÓGICA & COMPLEMENTARIA (GRID ASIMÉTRICO) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-black text-nexo-dark">
                  1. Evaluación Clínica y Screening Preventivo
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-semibold">
                  Atención en terreno ejecutada por profesionales inscritos en la Superintendencia de Salud.
                </p>
              </div>

              {/* Lista interactiva resumida */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clinicaSteps.map((step, idx) => (
                  <div key={idx} className="p-4 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:border-nexo-cyan/40 transition-colors duration-200">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">
                      <span className="text-nexo-cyan text-xs">◆</span> {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Bloque Destacado de Evaluaciones Complementarias (+40 años) */}
              <div className="p-5 bg-nexo-dark text-white rounded-2xl space-y-3 shadow-md relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 text-nexo-cyan/5 text-9xl font-black select-none pointer-events-none translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-300">
                  40+
                </div>
                <h4 className="text-nexo-cyan font-bold text-sm uppercase tracking-wider">
                  ⚡ Evaluaciones Complementarias Especiales
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                  Para colaboradores mayores de 40 años o con enfermedades crónicas (Diabetes/Hipertensión), incluimos sin costo adicional la toma de presión ocular para detección de glaucoma, descarte de cataratas y evaluación avanzada de fondo de ojo.
                </p>
              </div>
            </div>

            {/* Imagen Sección 1 */}
            <div className="lg:col-span-5 relative h-[400px] lg:h-[520px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/50">
              <Image 
                src="/images/servicio-clinico.jpg" 
                alt="Evaluación oftalmológica en terreno de Óptica Nexo" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-w-1024px) 100vw, 40vw"
                priority
              />
            </div>
          </section>

          {/* SECCIÓN 2: ASESORAMIENTO ÓPTICO (INVERTIDO VISUALMENTE) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:pt-12">
            {/* Imagen Sección 2 en pantallas grandes va a la izquierda */}
            <div className="order-last lg:order-first lg:col-span-5 relative h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/50">
              <Image 
                src="/images/asesoria-optica.jpg" 
                alt="Asesoramiento y selección de armazones ópticos corporativos" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-nexo-cyan uppercase tracking-wider">Estética & Ergonomía</span>
                <h2 className="text-2xl sm:text-3xl font-black text-nexo-dark">
                  2. Asesoramiento Óptico Profesional
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  No despachamos recetas en masa. Contamos con expertos ópticos que guían a cada trabajador de forma individualizada para garantizar que su herramienta visual sea cómoda y eficiente.
                </p>
              </div>

              <ul className="space-y-3.5">
                {[
                  "Análisis técnico de la mejor opción de cristales según la receta emitida.",
                  "Asesoría estética personalizada considerando la fisonomía del paciente.",
                  "Soporte integral y transparente para facilitar la decisión de compra."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-semibold">
                    <svg className="w-5 h-5 text-nexo-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* SECCIÓN 3: ENTREGA, POST-VENTA Y GARANTÍAS */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:pt-12">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-black text-nexo-dark">
                  3. Protocolo de Entrega, Post-Venta y Respaldo
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  Nuestro servicio finaliza cuando el colaborador está usando sus lentes de forma confortable y comprendiendo su uso.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-nexo-dark text-sm sm:text-base">✓ Control de Calidad In Situ</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                    Comprobación de agudeza visual final, ajuste ergonómico del armazón y educación sobre el cuidado del lente.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-nexo-dark text-sm sm:text-base">✓ Gestión de Reembolsos</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                    Facilitamos toda la documentación de forma clara (boletas, recetas timbradas) para cobros expeditos en Isapres y seguros complementarios.
                  </p>
                </div>
              </div>

              {/* Cuadro de Garantía Comercial */}
              <div className="p-6 bg-amber-50/60 border border-amber-200/70 rounded-2xl flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-amber-500 text-white font-black text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider shrink-0 shadow-sm">
                  Garantía Nexo
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-amber-900 text-sm sm:text-base">Garantía Técnica de Hasta 6 Meses</h4>
                  <p className="text-amber-800/90 text-xs sm:text-sm font-medium leading-relaxed">
                    Cubre cualquier defecto de material o errores en la fabricación del producto. Ante daños por mal uso accidental, extendemos asesoría técnica preferencial y atractivos descuentos en reparaciones de cristales o marcos.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagen Sección 3 */}
            <div className="lg:col-span-5 relative h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/50">
              <Image 
                src="/images/entrega-lentes.png" 
                alt="Entrega final y control de agudeza visual de lentes ópticos" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}