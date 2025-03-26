
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <section id="testimonials" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Lo Que Dicen Nuestros Clientes</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <Quote size={80} className="text-black opacity-5" />
          </div>
          
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-opacity duration-500 absolute inset-0",
                  activeIndex === index ? "opacity-100 z-20" : "opacity-0 z-10"
                )}
              >
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>
                  <footer>
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-sm opacity-70">{testimonial.position}</p>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-black/20 hover:border-black transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-black/20 hover:border-black transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-black w-6" : "bg-black/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-black/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-black/[0.02] rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;
