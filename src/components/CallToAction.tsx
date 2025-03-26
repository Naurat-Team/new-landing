
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight animate-fade-in">
            Impulsa Tu Negocio al Siguiente Nivel
          </h2>
          <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto animate-fade-in">
            Descubre cómo Naurat puede transformar tus procesos y potenciar tus resultados
            con soluciones diseñadas para el éxito.
          </p>
          
          <div className="animate-fade-in-delay">
            <a 
              href="#" 
              className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-black text-white rounded-md transition-all duration-300 font-medium hover:shadow-lg btn-hover-effect"
            >
              <span>Comenzar Ahora</span>
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-black/5"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-black/[0.03] rounded-full blur-3xl animate-bg-pulse"></div>
    </section>
  );
};

export default CallToAction;
