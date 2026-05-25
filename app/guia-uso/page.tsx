'use client';

import React, { useState } from 'react';

type TipoGuia = 'lejos' | 'cerca' | 'bifocales' | 'multifocales' | 'cuidados';

export default function GuiaUsoPage() {
  // 💡 Cambiamos el estado inicial a null para que no haya ninguna pestaña activa al entrar
  const [activeTab, setActiveTab] = useState<TipoGuia | null>(null);

  // Listado de los botones de selección
  const tabs = [
    { id: 'lejos', label: 'De Lejos', icon: '👓' },
    { id: 'cerca', label: 'De Cerca', icon: '📖' },
    { id: 'bifocales', label: 'Bifocales', icon: '🔍' },
    { id: 'multifocales', label: 'Multifocales', icon: '✨' },
    { id: 'cuidados', label: 'Cuidados', icon: '🛠️' },
  ] as const;

  return (
    <div className="w-full bg-slate-50/50 font-sans selection:bg-nexo-cyan/20 min-h-screen">
      
      {/* CONTENIDO PRINCIPAL */}
      <main className="w-full py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
          
          {/* HEADER DE LA PÁGINA */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black text-nexo-dark tracking-tight leading-none">
              Guía de Uso de Lentes
            </h1>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              ¿Qué tipo de lentes estás usando actualmente? Selecciona tu opción para conocer las instrucciones de adaptación, ergonomía y cuidado profesional.
            </p>
          </div>

          {/* MENÚ DE SELECCIÓN INTERACTIVO */}
          <div className="flex flex-wrap justify-center gap-3 p-2 bg-white border border-slate-200/60 rounded-2xl sm:rounded-3xl shadow-sm max-w-4xl mx-auto">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform active:scale-95 shrink-0 ${
                    isSelected
                      ? 'bg-nexo-dark text-white shadow-md shadow-nexo-dark/10'
                      : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="text-base sm:text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* CONTENEDOR DE INFORMACIÓN DINÁMICA */}
          <div className="max-w-3xl mx-auto transition-all duration-300">
            
            {/* 💡 Mensaje amigable cuando no hay nada seleccionado */}
            {activeTab === null && (
              <div className="text-center py-12 px-6 border-2 border-dashed border-slate-200 rounded-3xl bg-white/50">
                <span className="text-4xl block mb-3 animate-bounce">👆</span>
                <p className="text-slate-500 font-semibold text-sm sm:text-base">
                  Por favor, haz clic en una de las categorías superiores para desplegar sus instrucciones.
                </p>
              </div>
            )}
            
            {/* 1. CONTENIDO: DE LEJOS */}
            {activeTab === 'lejos' && (
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                  <span className="text-3xl bg-slate-100 p-3 rounded-2xl">👓</span>
                  <div>
                    <span className="text-xs font-bold text-nexo-cyan uppercase tracking-wider">Categoría Óptica</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-nexo-dark">Lentes Ópticos de Lejos</h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Uso principal</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Recomendados para conducir, ver televisión y reconocer objetos a distancia.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Frecuencia</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Pueden usarse solo en momentos específicos o durante todo el día, según indicación profesional.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Adaptación</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Es normal notar mayor nitidez inmediatamente; si hay molestias, suelen desaparecer en pocos días.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Recomendación</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Evita quitarlos y ponerlos constantemente para no forzar la vista de manera innecesaria.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. CONTENIDO: DE CERCA */}
            {activeTab === 'cerca' && (
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                  <span className="text-3xl bg-slate-100 p-3 rounded-2xl">📖</span>
                  <div>
                    <span className="text-xs font-bold text-nexo-cyan uppercase tracking-wider">Ergonomía de Lectura</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-nexo-dark">Lentes de Cerca</h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Uso principal</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Diseñados para lectura, uso de teléfono celular y trabajo prolongado en computador.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Postura</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Mantener una distancia adecuada (30 a 40 centímetros) mejora significativamente la comodidad visual.</p>
                  </div>
                  <div className="space-y-1.5 bg-red-50/50 p-4 border border-red-100 rounded-2xl">
                    <h3 className="font-bold text-red-900 text-sm sm:text-base flex items-center gap-2">⚠️ Importante</h3>
                    <p className="text-red-800/90 text-xs sm:text-sm leading-relaxed font-medium">No se recomienda bajo ninguna circunstancia caminar o desplazarse con ellos puestos.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Descanso visual</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Aplicar pausas activas cada 20 minutos (mirar al horizonte) ayuda a evitar la fatiga ocular y el estrés visual.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. CONTENIDO: BIFOCALES */}
            {activeTab === 'bifocales' && (
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                  <span className="text-3xl bg-slate-100 p-3 rounded-2xl">🔍</span>
                  <div>
                    <span className="text-xs font-bold text-nexo-cyan uppercase tracking-wider">Doble Segmento</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-nexo-dark">Lentes Bifocales</h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Diseño</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Permiten ver de lejos utilizando la parte superior del cristal y de cerca a través de la pestaña inferior.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Uso correcto</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Bajar levemente la mirada para leer y mantener la cabeza estable sin inclinarla demasiado hacia atrás.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Adaptación</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Puede tomar algunos días acostumbrarse al salto de imagen o cambio brusco entre ambas zonas ópticas.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Consejo</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Utilizarlos de forma continua durante las primeras jornadas acelera drásticamente la adaptación neurológica.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. CONTENIDO: MULTIFOCALES */}
            {activeTab === 'multifocales' && (
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                  <span className="text-3xl bg-slate-100 p-3 rounded-2xl">✨</span>
                  <div>
                    <span className="text-xs font-bold text-nexo-cyan uppercase tracking-wider">Alta Tecnología Progresiva</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-nexo-dark">Lentes Multifocales</h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Función</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Permiten una visión fluida y continua a todas las distancias esenciales: campos de lejos, intermedio y cerca.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Movimiento</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Se recomienda acompañar el enfoque moviendo suavemente la cabeza en dirección al objeto, no solo los ojos.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Adaptación</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">El proceso puede durar entre 7 a 15 días; es completamente normal experimentar distorsiones laterales al inicio.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexo-dark text-sm sm:text-base flex items-center gap-2">◆ Uso</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Mientras más horas consecutivas se utilicen en el día a día, más natural y rápida será tu acomodación visual.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. CONTENIDO: CUIDADOS GENERALES */}
            {activeTab === 'cuidados' && (
              <div className="bg-amber-50/40 border border-amber-200/60 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 border-b border-amber-200 pb-5">
                  <span className="text-3xl bg-amber-500 text-white p-3 rounded-2xl shadow-sm">🛠️</span>
                  <div>
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Mantenimiento Preventivo</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-amber-950">Cuidados Generales</h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-amber-900 text-sm sm:text-base flex items-center gap-2">✓ Limpieza</h3>
                    <p className="text-amber-950/80 text-sm leading-relaxed font-medium">Usar exclusivamente paños de microfibra limpios. Evita frotar los cristales con ropa, toallas de papel o pañuelos desechables.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-amber-900 text-sm sm:text-base flex items-center gap-2">✓ Almacenamiento</h3>
                    <p className="text-amber-950/80 text-sm leading-relaxed font-medium">Guardar siempre el anteojo en su estuche rígido original cuando no lo estés utilizando.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-amber-900 text-sm sm:text-base flex items-center gap-2">✓ Temperatura</h3>
                    <p className="text-amber-950/80 text-sm leading-relaxed font-medium">No exponer los lentes a calor extremo (como dejarlos arriba del tablero del auto expuestos al sol directo).</p>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-amber-900 text-sm sm:text-base flex items-center gap-2">✓ Higiene profunda</h3>
                    <p className="text-amber-950/80 text-sm leading-relaxed font-medium">Puedes lavarlos periódicamente con agua fría del grifo y una gota de jabón líquido neutro para eliminar grasas.</p>
                  </div>
                  <div className="col-span-1 sm:col-span-2 pt-4 border-t border-amber-200/60 text-center font-bold text-amber-900 text-sm sm:text-base">
                    🚀 Un buen cuidado prolonga la vida útil de los lentes y mantiene intacta su calidad óptica original.
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </main>

    </div>
  );
}