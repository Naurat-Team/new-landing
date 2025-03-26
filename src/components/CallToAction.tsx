
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-20 md:py-32 bg-gradient-to-br from-[#312c86] to-[#211d5e] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight animate-fade-in text-white">
            Impulsa Tu Negocio al Siguiente Nivel
          </h2>
          <p className="text-lg mb-10 text-indigo-100 max-w-2xl mx-auto animate-fade-in">
            Descubre cómo Naurat puede transformar tus procesos y potenciar tus resultados
            con soluciones diseñadas para el éxito.
          </p>
          
          <div className="animate-fade-in-delay">
            <a 
              href="#" 
              className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-[#312c86] rounded-md transition-all duration-300 font-medium hover:shadow-xl btn-hover-effect"
            >
              <span>Comenzar Ahora</span>
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/[0.05] rounded-full blur-3xl animate-bg-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-indigo-300/[0.05] rounded-full blur-3xl"></div>
    </section>
  );
};

export default CallToAction;
