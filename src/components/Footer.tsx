
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-black/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="inline-block text-2xl font-bold mb-4">Naurat</a>
            <p className="text-sm opacity-70 max-w-md">
              Impulsa decisiones inteligentes con análisis de datos ágil, potente y accesible para todos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="https://calendly.com/team-naurat-kdlj/30min" target="_blank" className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">Guías</a></li>
              <li><a href="https://calendly.com/team-naurat-kdlj/30min" target="_blank" className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">Soporte</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">Sobre Nosotros</a></li>
              <li><a href="https://calendly.com/team-naurat-kdlj/30min" target="_blank" className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">Contacto</a></li>
              <li><a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">Términos de Uso</a></li>
              <li><a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">© {currentYear} Naurat. Todos los derechos reservados.</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-200" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="https://www.linkedin.com/company/naurat/">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-200" aria-label="Youtube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
