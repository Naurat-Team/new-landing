
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-white to-[#e8e7f7]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center px-4 py-1.5 border border-[#312c86] rounded-full animate-fade-in bg-gradient-to-r from-[#f0f0ff] to-[#e8e7f7]">
            <span className="text-xs font-medium tracking-wide text-[#312c86]">Innovación en Soluciones Digitales</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 animate-slide-down bg-clip-text text-transparent bg-gradient-to-r from-black to-[#312c86]">
            Simplificando lo complejo <br className="hidden md:block" />
            para impulsar tu éxito
          </h1>
          
          <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto mb-10 animate-fade-in-delay text-gray-700">
            Naurat transforma la manera en que las empresas gestionan sus procesos, 
            proporcionando soluciones innovadoras que mejoran la eficiencia y potencian resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-delay">
            <a 
              href="#cta" 
              className="btn-hover-effect w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 bg-gradient-to-r from-[#312c86] to-[#211d5e] text-white rounded-md transition-all duration-300 font-medium shadow-md hover:shadow-xl hover:shadow-[#312c86]/20"
            >
              <span>Comenzar Ahora</span>
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="#how-it-works" 
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 border border-[#312c86]/30 rounded-md hover:bg-[#312c86]/5 transition-all duration-300 font-medium text-[#312c86]"
            >
              Conocer más
            </a>
          </div>
        </div>
      </div>
      
      {/* Abstract shape decorations */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#312c86]/[0.05] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-bg-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#312c86]/[0.05] rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
