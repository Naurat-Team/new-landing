
import React from 'react';
import { Feather, Layers, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Feather className="w-10 h-10 mb-6" />,
      title: "Simplicidad en el Diseño",
      description: "Interfaz intuitiva que elimina la curva de aprendizaje, permitiéndote comenzar de inmediato.",
      gradient: "from-[#312c86] to-[#4b45b5]"
    },
    {
      icon: <Layers className="w-10 h-10 mb-6" />,
      title: "Análisis Avanzado",
      description: "Procesamiento de datos en tiempo real para obtener información valiosa que impulsa decisiones estratégicas.",
      gradient: "from-[#4b45b5] to-[#5751c5]"
    },
    {
      icon: <Zap className="w-10 h-10 mb-6" />,
      title: "Resultados Inmediatos",
      description: "Implementación ágil que genera impacto positivo desde el primer momento de adopción.",
      gradient: "from-[#5751c5] to-[#312c86]"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white relative overflow-hidden z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Cómo Funciona</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#312c86] to-[#5751c5] mx-auto"></div>
          <p className="text-lg opacity-80 mt-6 text-gray-600">
            Un enfoque simplificado para transformar la manera en que gestionas tu negocio,
            sin complejidades innecesarias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-lg border border-[#312c86]/10 hover:border-[#312c86]/30 transition-all duration-300 bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`rounded-full p-4 bg-gradient-to-r ${step.gradient} text-white mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#312c86]/20 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#312c86]/[0.03] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 left-0 w-72 h-72 bg-[#5751c5]/[0.03] rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowItWorks;
