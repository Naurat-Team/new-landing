
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Naurat transformó completamente la forma en que gestionamos nuestros proyectos. La interfaz intuitiva y las capacidades analíticas avanzadas han sido fundamentales para nuestro crecimiento.",
      author: "Alejandra Martínez",
      position: "Directora de Operaciones, TechVision"
    },
    {
      quote: "Implementar Naurat fue una de las mejores decisiones estratégicas que tomamos. La plataforma simplificó nuestros procesos complejos y mejoró significativamente nuestra eficiencia operativa.",
      author: "Carlos Mendoza",
      position: "CEO, Innovate Solutions"
    },
    {
      quote: "Lo que más valoramos de Naurat es la combinación perfecta entre simplicidad y potencia. Nos ha permitido escalar operaciones sin añadir complejidad innecesaria a nuestros flujos de trabajo.",
      author: "Elena Rodríguez",
      position: "Directora de Tecnología, Global Services"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Lo Que Dicen Nuestros Clientes</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#312c86] to-[#5751c5] mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <Quote size={80} className="text-[#312c86] opacity-10" />
          </div>
          
          <div className="relative z-10 h-[300px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-700 absolute inset-0",
                  activeIndex === index ? "opacity-100 z-20 transform-none" : "opacity-0 z-10 translate-x-8"
                )}
              >
                <blockquote className="text-center p-8 bg-white rounded-2xl shadow-lg border border-[#312c86]/10">
                  <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-800 italic">
                    "{testimonial.quote}"
                  </p>
                  <footer>
                    <p className="font-semibold text-lg text-[#312c86]">{testimonial.author}</p>
                    <p className="text-sm text-[#5751c5]">{testimonial.position}</p>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <Button 
              onClick={handlePrev}
              variant="outline"
              className="p-3 rounded-full hover:bg-[#312c86]/5 hover:text-[#312c86] hover:border-[#312c86]/30 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </Button>
            <Button 
              onClick={handleNext}
              variant="outline"
              className="p-3 rounded-full hover:bg-[#312c86]/5 hover:text-[#312c86] hover:border-[#312c86]/30 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-[#312c86] w-6" : "bg-[#312c86]/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
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
