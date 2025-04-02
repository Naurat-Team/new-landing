
import React, { useState } from 'react';
import { Play, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import VideoDemo from "@/components/VideoDemo"; // Asegúrate de que la ru

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
              <a href='https://calendly.com/team-naurat-kdlj/30min' target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-[#312c86] text-white rounded-md hover:bg-[#312c86]/90 transition-colors">Ver demo completa</a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2"><VideoDemo /></div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#312c86]/[0.03] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#5751c5]/[0.04] rounded-full blur-3xl"></div>
    </section>
  );
};

export default DemoVideo;