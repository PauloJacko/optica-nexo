'use client';

import React, { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', company: '', employees: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', company: '', employees: '', email: '', message: '' });
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Fondo desenfocado suavizado médico */}
      <div className="fixed inset-0 bg-slate-900/15 backdrop-blur-sm transition-opacity" onClick={onClose} />

      {/* Contenedor Principal Estilo Clínico Minimalista */}
      <div className="relative bg-white/95 backdrop-blur-md w-full max-w-xl rounded-2xl shadow-xl border border-slate-200/50 p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Botón Cerrar Sutil */}
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-50 transition-colors cursor-pointer">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Cabecera Limpia sin Exceso de Texto */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Solicitud de Operativo Óptico</h2>
          <p className="text-slate-500 text-xs mt-1">Completa los datos de tu organización para coordinar una propuesta técnica.</p>
        </div>

        {isSuccess ? (
          /* Estado Exitoso Suave */
          <div className="text-center py-6 space-y-3 animate-in fade-in duration-200">
            <div className="bg-emerald-50 text-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-800">¡Datos recibidos!</h3>
              <p className="text-slate-500 text-xs mt-1 max-w-xs mx-auto">Un asesor clínico se comunicará con tu empresa a la brevedad.</p>
            </div>
            <button onClick={() => { setIsSuccess(false); onClose(); }} className="mt-2 text-xs font-semibold text-nexo-cyan hover:text-nexo-cyan/80 transition-colors cursor-pointer">
              Volver al inicio
            </button>
          </div>
        ) : (
          /* Formulario de Entrada Estilizado con Etiquetas Más Oscuras y Legibles */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Nombre del Contacto</label>
              <input 
                type="text" required placeholder="Ej. Juan Pérez" value={formData.name}
                className="w-full px-3 py-2 rounded-lg bg-slate-50/50 border border-slate-200/60 focus:outline-none focus:border-nexo-cyan focus:bg-white text-xs font-medium text-slate-700 placeholder-slate-400 transition-all"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Empresa</label>
                <input 
                  type="text" required placeholder="Nombre de la organización" value={formData.company}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50/50 border border-slate-200/60 focus:outline-none focus:border-nexo-cyan focus:bg-white text-xs font-medium text-slate-700 placeholder-slate-400 transition-all"
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Nº Colaboradores aprox.</label>
                <input 
                  type="number" required placeholder="Cantidad" value={formData.employees}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50/50 border border-slate-200/60 focus:outline-none focus:border-nexo-cyan focus:bg-white text-xs font-medium text-slate-700 placeholder-slate-400 transition-all"
                  onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Correo Corporativo</label>
              <input 
                type="email" required placeholder="ejemplo@empresa.cl" value={formData.email}
                className="w-full px-3 py-2 rounded-lg bg-slate-50/50 border border-slate-200/60 focus:outline-none focus:border-nexo-cyan focus:bg-white text-xs font-medium text-slate-700 placeholder-slate-400 transition-all"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Requerimientos o Mensaje</label>
              <textarea 
                rows={3} required placeholder="Fechas estimadas, jornadas o dudas operativas..." value={formData.message}
                className="w-full px-3 py-2 rounded-lg bg-slate-50/50 border border-slate-200/60 focus:outline-none focus:border-nexo-cyan focus:bg-white text-xs font-medium text-slate-700 placeholder-slate-400 resize-none transition-all"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {isError && (
              <p className="text-red-500 text-[11px] font-medium text-center">Ocurrió un error al enviar el formulario. Por favor reintente.</p>
            )}

            <button 
              type="submit" disabled={isSubmitting}
              className="w-full bg-nexo-cyan hover:bg-nexo-cyan/90 disabled:bg-slate-200 text-nexo-dark font-bold py-2.5 rounded-lg transition-all text-xs tracking-wider cursor-pointer flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-nexo-dark" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Enviando Solicitud...</span>
                </>
              ) : (
                <span>Enviar Solicitud de Cotización</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}