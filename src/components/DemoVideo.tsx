
import React, { useState } from 'react';
import { Play, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DemoVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // En una implementación real, aquí controlarías la reproducción del video
    setTimeout(() => {
      console.log("Video playing");
    }, 300);
  };

  const features = [
    "Interfaz intuitiva y fácil de usar",
    "Dashboards personalizables",
    "Análisis predictivo avanzado",
    "Integraciones con múltiples fuentes de datos"
  ];

  return (
    <section id="demo" className="py-20 md:py-32 bg-gradient-to-b from-[#f8f8ff] to-white relative overflow-hidden z-10">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1.5 bg-[#312c86]/10 text-[#312c86] rounded-full text-sm font-medium mb-4">DEMO EN VÍDEO</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Naurat en acción</h2>
              <p className="text-lg opacity-80 mb-8 text-gray-600">
                Descubre cómo nuestra plataforma revoluciona la manera en que las empresas 
                aprovechan sus datos para tomar decisiones más inteligentes y estratégicas.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#312c86] h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handlePlayClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#312c86] text-white rounded-md hover:bg-[#312c86]/90 transition-colors"
              >
                <Play size={18} fill="white" />
                <span>Ver demo completa</span>
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Card className="overflow-hidden border-[#312c86]/10 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-[#f0f0ff]">
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9 bg-[#312c86] relative group cursor-pointer" onClick={handlePlayClick}>
                  {/* Video placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#211d5e] to-[#312c86] flex items-center justify-center">
                    <div className="text-center max-w-xs p-6">
                      <h3 className="text-white text-xl font-semibold mb-2">Naurat Platform</h3>
                      <p className="text-white/70 text-sm">Transformando datos en decisiones inteligentes</p>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-white/90 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={36} className="text-[#312c86] fill-[#312c86] ml-1" />
                    </div>
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                </div>
                
                {/* Video controls bar (for styling only) */}
                <div className="p-4 bg-[#211d5e] text-white flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <span className="text-sm">DEMO EN VIVO</span>
                  </div>
                  <div className="text-sm opacity-80">03:24 / 10:15</div>
                </div>
                
                {/* Video features list */}
                <div className="p-6 border-t border-[#312c86]/10 bg-white">
                  <h4 className="font-medium text-[#312c86] mb-2">Características destacadas:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Dashboard intuitivo con análisis en tiempo real</li>
                    <li>• Informes personalizables con exportación a múltiples formatos</li>
                    <li>• Integración con sistemas existentes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#312c86]/[0.03] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#5751c5]/[0.04] rounded-full blur-3xl"></div>
    </section>
  );
};

export default DemoVideo;
