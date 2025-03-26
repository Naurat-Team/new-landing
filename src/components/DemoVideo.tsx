
import React from 'react';
import { Play } from 'lucide-react';

const DemoVideo: React.FC = () => {
  return (
    <section id="demo" className="py-20 md:py-32 bg-[#f8f8ff] relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      <div className="container mx-auto px-6 relative">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ve Naurat en Acción</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#312c86] to-[#5751c5] mx-auto"></div>
          <p className="text-lg opacity-80 mt-6 text-gray-600">
            Descubre cómo nuestra plataforma transforma la eficiencia operativa a través
            de un enfoque innovador y práctico.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-w-16 aspect-h-9 bg-black/90 relative group">
            {/* Placeholder for video - in production you would embed a real video here */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#211d5e] to-[#312c86]">
              <div className="text-white text-center max-w-md p-6">
                <h3 className="text-2xl mb-3 font-semibold">Demo de Naurat</h3>
                <p className="opacity-80 mb-8">Un video demostrativo de cómo Naurat puede transformar tus procesos de negocio.</p>
                <button className="inline-flex items-center justify-center p-4 rounded-full bg-white text-[#312c86] group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/10">
                  <Play size={32} className="fill-[#312c86]" />
                </button>
              </div>
            </div>
            
            {/* Video thumbnail overlay (can be replaced with actual thumbnail) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            
            {/* Play button overlay */}
            <button className="absolute inset-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity group">
              <div className="h-20 w-20 flex items-center justify-center rounded-full bg-white/90 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Play size={36} className="text-[#312c86] fill-[#312c86] ml-1" />
              </div>
            </button>
          </div>
          
          {/* Video controls bar - for styling only */}
          <div className="p-4 bg-[#211d5e] text-white flex justify-between items-center">
            <span className="font-medium">Naurat Platform Demo</span>
            <div className="flex space-x-4">
              <span className="text-sm opacity-80">03:24 / 10:15</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#cta" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#312c86] text-white hover:bg-[#211d5e] transition-colors duration-300"
          >
            Solicitar Demo Personalizada
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#312c86]/[0.03] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#5751c5]/[0.04] rounded-full blur-3xl"></div>
    </section>
  );
};

export default DemoVideo;
