// src/components/layout/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import ContactModal from '../sections/Contact';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Escuchar el evento personalizado desde cualquier otra parte de la app
  useEffect(() => {
    const handleOpenModalEvent = () => {
      openModal();
    };

    window.addEventListener('open-contact-modal', handleOpenModalEvent);
    return () => {
      window.removeEventListener('open-contact-modal', handleOpenModalEvent);
    };
  }, []);

  return (
    <>
      {/* El menú superior interactivo */}
      <Navbar onQuoteClick={openModal} />
      
      {/* El modal global que escucha al menú superior */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}