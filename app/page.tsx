// src/app/page.tsx
"use client";

import React from "react";
import Hero from "../components/sections/Hero";
import Benefits from "../components/sections/Benefits";
import Services from "../components/sections/Services";

export default function Home() {
  const handleHeroClick = () => {
    const contactSection = document.getElementById("services"); 
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Zona de bienvenida */}
      <Hero onQuoteClick={handleHeroClick} />
      
      {/* 2. Beneficios */}
      <Benefits />
      
      {/* 3. Servicios resumidos */}
      <Services />

    </div>
  );
}