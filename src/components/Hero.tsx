
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center px-3 py-1 border border-black rounded-full animate-fade-in">
            <span className="text-xs font-medium tracking-wide">Innovación en Soluciones Digitales</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 animate-slide-down">
            Simplificando lo complejo <br className="hidden md:block" />
            para impulsar tu éxito
          </h1>
          
          <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto mb-10 animate-fade-in-delay">
            Naurat transforma la manera en que las empresas gestionan sus procesos, 
            proporcionando soluciones innovadoras que mejoran la eficiencia y potencian resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-delay">
            <a 
              href="#cta" 
              className="btn-hover-effect w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 bg-black text-white rounded-md transition-all duration-300 font-medium"
            >
              <span>Comenzar Ahora</span>
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="#how-it-works" 
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 border border-black rounded-md hover:bg-black/5 transition-all duration-300 font-medium"
            >
              Conocer más
            </a>
          </div>
        </div>
      </div>
      
      {/* Abstract shape decorations */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-black/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-bg-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-black/[0.03] rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
