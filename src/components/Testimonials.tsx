
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Naurat ha transformado la forma en que analizamos nuestros datos de mercado. Los insights de IA nos han ayudado a identificar oportunidades que de otra manera habríamos perdido.",
      author: "Sarah Chen",
      position: "Chief Data Officer, TechVision Inc.",
      image: "/lovable-uploads/14fe8230-c266-477a-a226-afb1365aa6ca.png"
    },
    {
      quote: "Las capacidades de análisis predictivo son impresionantes. Hemos podido anticipar las necesidades de los clientes y adaptar nuestra estrategia en consecuencia.",
      author: "Michael Rodriguez",
      position: "VP de Análisis, Global Retail",
      image: "/lovable-uploads/14fe8230-c266-477a-a226-afb1365aa6ca.png"
    },
    {
      quote: "Lo que distingue a Naurat es cómo han hecho accesible la compleja ciencia de datos para todo nuestro equipo. La interfaz intuitiva ha sido un cambio radical.",
      author: "Emma Williams",
      position: "Directora de Operaciones, HealthNet",
      image: "/lovable-uploads/14fe8230-c266-477a-a226-afb1365aa6ca.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#f0f0ff] relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="mb-16 md:mb-20 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#312c86]/10 text-[#312c86] rounded-full text-sm font-medium mb-4">CASOS DE ÉXITO</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Nuestra plataforma de confianza</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vea cómo organizaciones de diversas industrias utilizan Naurat para transformar su enfoque de datos.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="relative z-10 overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border border-[#312c86]/10 shadow-lg overflow-hidden bg-white">
                    <CardContent className="p-0">
                      <div className="p-8 md:p-10 relative">
                        <Quote className="absolute top-8 left-8 text-[#312c86]/10 w-16 h-16" />
                        <div className="relative z-10">
                          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-800">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-[#312c86]">{testimonial.author}</p>
                              <p className="text-sm text-gray-600">{testimonial.position}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <Button 
              onClick={handlePrev}
              variant="outline"
              className="w-12 h-12 p-0 rounded-full hover:bg-[#312c86] hover:text-white hover:border-[#312c86] transition-all duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex === index ? "bg-[#312c86] w-8" : "bg-[#312c86]/30"
                  )}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              onClick={handleNext}
              variant="outline"
              className="w-12 h-12 p-0 rounded-full hover:bg-[#312c86] hover:text-white hover:border-[#312c86] transition-all duration-300"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#312c86]/[0.05] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#5751c5]/[0.05] rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;
