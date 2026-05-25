// src/components/sections/Hero.tsx
"use client";

import React from 'react';

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  
  const handleCotizarClick = () => {
    // 1. Ejecuta tu función original de la Home (el scroll suave a servicios)
    onQuoteClick();
    
    // 2. Dispara el evento global para avisarle al Header que abra el modal
    const event = new CustomEvent('open-contact-modal');
    window.dispatchEvent(event);
  };

  return (
    <section 
      className="w-full relative min-h-[85vh] md:min-h-[80vh] flex items-end md:items-center px-6 sm:px-8 bg-cover bg-[position:75%_center] md:bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/operativo.webp')" }}
    >
      {/* CAPA DE DEGRADADO ADAPTATIVA */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/30 md:bg-gradient-to-r md:from-white md:via-white/80 md:to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 pb-12 pt-40 md:py-0">
        
        {/* TEXTO FLOTANDO */}
        <div className="md:col-span-7 flex flex-col space-y-5 text-left max-w-xl">
          
          <span className="inline-flex self-start bg-nexo-cyan/10 text-nexo-cyan text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Salud Visual Corporativa
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-nexo-dark tracking-tight leading-tight">
            Atención Óptica Profesional en tu <span className="text-nexo-cyan">Empresa</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Evaluaciones clínicas y entrega de lentes operativos directamente en tus installations, cubriendo todo Chile con rapidez y confianza.
          </p>
          
          {/* BOTONES PREMIUM DIRECTOS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {/* Botón Primario: WhatsApp */}
            <a 
              href="https://wa.me/56988037117"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-nexo-cyan hover:bg-nexo-cyan/90 text-nexo-dark font-black px-7 py-3.5 rounded-xl transition-all duration-250 shadow-md shadow-nexo-cyan/10 cursor-pointer text-center"
            >
              Contactar WhatsApp
            </a>
            
            {/* Botón Secundario: Disparador del Modal y el Scroll */}
            <button 
              onClick={handleCotizarClick}
              className="inline-flex items-center justify-center bg-white/80 backdrop-blur-xs md:bg-transparent border-2 border-nexo-dark hover:bg-nexo-dark hover:text-white text-nexo-dark font-bold px-7 py-3.5 rounded-xl transition-all duration-250 text-center cursor-pointer"
            >
              Cotizar Operativo
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}