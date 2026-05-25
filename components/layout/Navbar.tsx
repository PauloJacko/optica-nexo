"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Definimos la propiedad que recibirá desde page.tsx
interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Servicios', href: '/servicios' },
    { name: 'Guía de Uso', href: '/guia-uso' },
    { name: 'Quiénes Somos', href: '/quienes-somos' },
    { name: 'Convenios', href: '/convenios' },
  ];

  return (
    <header className="w-full bg-white/75 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 sm:px-8">
        
        {/* LOGO CORPORATIVO CON FUSIÓN DE FONDO */}
        <Link href="/" className="flex items-center cursor-pointer py-2 hover:opacity-90 transition-opacity">
          <Image 
            src="/images/logo-nexo.png" 
            alt="Óptica Nexo Logo" 
            width={150}
            height={42} 
            className="object-contain h-auto w-auto mix-blend-multiply"
            priority
          />
        </Link>
        
        {/* MENÚ ESCRITORIO ENCAPSULADO TIPO SAAS */}
        <nav className="hidden md:flex space-x-1 bg-slate-100/60 p-1.5 rounded-xl border border-slate-200/40">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-nexo-dark shadow-xs border border-slate-250/60'
                    : 'text-slate-600 hover:text-nexo-cyan hover:bg-white/40'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        {/* BOTÓN CTA COMERCIAL (ESCRITORIO) - Ahora es un botón interactivo */}
        <div className="hidden md:block">
          <button 
            onClick={onQuoteClick}
            className="inline-flex items-center justify-center bg-nexo-cyan hover:bg-nexo-cyan/90 text-nexo-dark text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-250 shadow-xs cursor-pointer"
          >
            Cotizar Operativo
          </button>
        </div>
        
        {/* BOTÓN HAMBURGUESA (Móvil) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            type="button"
            className="text-nexo-dark hover:text-nexo-cyan focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors"
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.828 4.828 4.829-4.828a1 1 0 111.414 1.414l-4.828 4.828 4.828 4.829z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-150 shadow-lg absolute w-full left-0 animate-fadeIn">
          <nav className="flex flex-col px-6 py-5 space-y-3 text-base font-semibold text-slate-750">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl transition-colors ${
                    isActive 
                      ? 'bg-nexo-cyan/10 text-nexo-cyan' 
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* BOTÓN CTA COMERCIAL (MÓVIL) - Cierra el menú móvil y levanta el modal */}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onQuoteClick();
                }}
                className="w-full inline-flex items-center justify-center bg-nexo-cyan text-nexo-dark font-black py-3.5 rounded-xl text-center text-sm cursor-pointer"
              >
                Cotizar Operativo
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}