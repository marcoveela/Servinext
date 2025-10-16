import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <img
              src="/Imagen de WhatsApp 2025-10-08 a las 22.27.27_cca83bfd.jpg"
              alt="ServiNext Logo"
              className="h-12 w-auto"
            />
            <p className="text-gray-300 leading-relaxed">
              Soluciones profesionales en limpieza, seguridad, jardinería y control de plagas para tu empresa.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-3 rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Limpieza Institucional
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Servicios de Seguridad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Jardinería
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Control de Plagas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+59131234567"
                  className="flex items-start space-x-3 text-gray-300 hover:text-sky-400 transition-colors group"
                >
                  <Phone size={20} className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span>+591 3 123-4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@servinext.com"
                  className="flex items-start space-x-3 text-gray-300 hover:text-sky-400 transition-colors group"
                >
                  <Mail size={20} className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span>info@servinext.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin size={20} className="flex-shrink-0 mt-1" />
                  <span>Santa Cruz de la Sierra, Bolivia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ServiNext. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
