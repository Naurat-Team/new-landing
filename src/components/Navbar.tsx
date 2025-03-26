
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="relative z-10 text-2xl font-bold tracking-tight">
          Naurat
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="link-underline text-sm font-medium tracking-wide">Cómo funciona</a>
          <a href="#benefits" className="link-underline text-sm font-medium tracking-wide">Beneficios</a>
          <a href="#testimonials" className="link-underline text-sm font-medium tracking-wide">Testimonios</a>
          <a 
            href="#cta" 
            className="btn-hover-effect px-5 py-2 rounded-md bg-black text-white text-sm font-medium tracking-wide"
          >
            Comenzar Ahora
          </a>
        </nav>

        <button className="md:hidden relative z-10 p-2" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
