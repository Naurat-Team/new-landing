
import React from 'react';
import { BarChart, Shield, Clock, LineChart } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: <BarChart className="w-7 h-7" />,
      title: "Incremento en Productividad",
      description: "Optimiza procesos para lograr más resultados en menos tiempo, mejorando el rendimiento general.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Seguridad Avanzada",
      description: "Protección integral de datos con protocolos de encriptación de nivel empresarial.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Ahorro de Tiempo",
      description: "Automatización inteligente que reduce tareas manuales y elimina ineficiencias operativas.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: <LineChart className="w-7 h-7" />,
      title: "Escalabilidad Garantizada",
      description: "Crece sin limitaciones técnicas, adaptándose perfectamente a la evolución de tu negocio.",
      color: "from-blue-600 to-indigo-500"
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-gradient-to-b from-black to-indigo-950 text-white relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Beneficios Clave</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          <p className="text-lg opacity-80 mt-6">
            Diseñado para potenciar cada aspecto de tu negocio mediante soluciones
            precisas y eficientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className="flex p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 animate-fade-in transform hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`mr-5 rounded-full p-3 bg-gradient-to-r ${benefit.color}`}>
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
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Benefits;
