
import React from 'react';
import { Feather, Layers, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Feather className="w-10 h-10 mb-6" />,
      title: "Simplicidad en el Diseño",
      description: "Interfaz intuitiva que elimina la curva de aprendizaje, permitiéndote comenzar de inmediato."
    },
    {
      icon: <Layers className="w-10 h-10 mb-6" />,
      title: "Análisis Avanzado",
      description: "Procesamiento de datos en tiempo real para obtener información valiosa que impulsa decisiones estratégicas."
    },
    {
      icon: <Zap className="w-10 h-10 mb-6" />,
      title: "Resultados Inmediatos",
      description: "Implementación ágil que genera impacto positivo desde el primer momento de adopción."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Cómo Funciona</h2>
          <p className="text-lg opacity-80">
            Un enfoque simplificado para transformar la manera en que gestionas tu negocio,
            sin complejidades innecesarias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-lg border border-black/10 hover:border-black/20 transition-all duration-300 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full p-4 bg-black/5 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="opacity-80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-full h-px bg-black/5"></div>
    </section>
  );
};

export default HowItWorks;
