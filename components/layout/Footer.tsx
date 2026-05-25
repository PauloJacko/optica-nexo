import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-white pt-16 pb-8 px-6 sm:px-8 mt-auto border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-900">
        
        {/* COLUMNA 1: IDENTIDAD (4 de 12 columnas) */}
        <div className="lg:col-span-4 flex flex-col space-y-4 justify-between">
          <div className="space-y-4">
            {/* Logo optimizado con hack de inversión para fondos oscuros */}
            <div className="flex items-center py-1">
              <Image 
                src="/images/logo-nexo.png" 
                alt="Nexo Servicios Ópticos" 
                width={150} 
                height={42} 
                className="object-contain h-auto w-auto brightness-0 invert" 
              />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-medium">
              Salud visual que impulsa el bienestar, seguridad y la productividad de tu empresa en todo Chile.
            </p>
          </div>
        
        </div>

        {/* COLUMNA 2: CONTACTO COMERCIAL (4 de 12 columnas) */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <h4 className="text-xs uppercase tracking-[0.15em] text-nexo-cyan font-bold">
            Contacto Corporativo
          </h4>
          <div className="bg-slate-900/40 border border-slate-900 p-5 rounded-2xl space-y-4">
            <div>
              <p className="text-base font-bold text-white tracking-tight">Mauricio Tapia Villarroel</p>
              <p className="text-xs text-nexo-cyan font-semibold uppercase tracking-wider mt-0.5">Gerente General Ópticas Nexo</p>
            </div>
            
            <div className="space-y-3 pt-2 border-t border-slate-900 text-sm font-medium">
              <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-slate-500 text-xs uppercase tracking-wider font-bold">WhatsApp:</span> 
                <a 
                  href="https://wa.me/56988037117" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-200 hover:text-nexo-cyan transition-colors"
                >
                  +56 9 88037117
                </a>
              </p>
              <p className="flex flex-col gap-1">
                <span className="text-slate-500 text-xs uppercase tracking-wider font-bold">Email:</span> 
                <a 
                  href="mailto:serviciosopticosintegrales.mt@gmail.com" 
                  className="text-slate-200 hover:text-nexo-cyan transition-colors break-all"
                >
                  serviciosopticosintegrales.mt@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* COLUMNA 3: UBICACIÓN Y MAPA INTERACTIVO (4 de 12 columnas) */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <h4 className="text-xs uppercase tracking-[0.15em] text-nexo-cyan font-bold flex items-center gap-2">
            <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Serrano 73, Oficina 309, Santiago</span>
          </h4>
          
          {/* Contenedor del Mapa Estilizado */}
          <div className="w-full h-40 rounded-2xl overflow-hidden border border-slate-900 shadow-inner group relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1873151528657!2d-70.65219712344719!3d-33.44440899650074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a082d6b387%3A0xc6cbfa7d92120ef2!2sSerrano%2073%2C%20Oficina%20309%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1716380000000!5m2!1ses-419!2scl" 
              className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale-[20%] invert-[90%] hue-rotate-[180deg]" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Óptica Nexo"
            ></iframe>
            {/* Capa de borde sutil para suavizar el acople oscuro */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/5 ring-1 ring-black/50"></div>
          </div>
        </div>

      </div>

      {/* SUB-FOOTER: DERECHOS RESERVADOS CENTRALIZADOS */}
      <div className="max-w-7xl mx-auto pt-8 text-center text-xs text-slate-500 font-medium tracking-wide">
        <p>
          &copy; {new Date().getFullYear()} Servicios Ópticos Integrales NEXO. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}