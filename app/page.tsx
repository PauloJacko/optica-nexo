// src/app/page.tsx
"use client";

import React, { useState } from "react";
import Navbar from "../components/layout/Navbar"; 
import Hero from "../components/sections/Hero";
import Benefits from "../components/sections/Benefits";
import Services from "../components/sections/Services";
import ContactModal from "../components/sections/Contact";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="flex flex-col min-h-screen w-full relative">
      
      {/* 1. Control del modal desde la barra de navegación */}
      <Navbar onQuoteClick={openModal} />
      
      {/* 2. Control del modal desde la zona de bienvenida */}
      <Hero onQuoteClick={openModal} />
      
      <Benefits />
      
      <Services />
      
      {/* Ventana Emergente compartida esperando ser activada */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

    </main>
  );
}