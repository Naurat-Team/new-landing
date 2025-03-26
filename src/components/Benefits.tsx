
import React from 'react';
import { BarChart, Shield, Clock, LineChart } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: <BarChart className="w-7 h-7" />,
      title: "Incremento en Productividad",
      description: "Optimiza procesos para lograr más resultados en menos tiempo, mejorando el rendimiento general."
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Seguridad Avanzada",
      description: "Protección integral de datos con protocolos de encriptación de nivel empresarial."
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Ahorro de Tiempo",
      description: "Automatización inteligente que reduce tareas manuales y elimina ineficiencias operativas."
    },
    {
      icon: <LineChart className="w-7 h-7" />,
      title: "Escalabilidad Garantizada",
      description: "Crece sin limitaciones técnicas, adaptándose perfectamente a la evolución de tu negocio."
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Beneficios Clave</h2>
          <p className="text-lg opacity-80">
            Diseñado para potenciar cada aspecto de tu negocio mediante soluciones
            precisas y eficientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className="flex p-6 border border-white/10 rounded-lg hover:border-white/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mr-5 rounded-full p-3 bg-white/10">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="opacity-80">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-5"></div>
    </section>
  );
};

export default Benefits;
