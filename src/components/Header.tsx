import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="/Imagen de WhatsApp 2025-10-08 a las 22.27.27_cca83bfd.jpg"
              alt="ServiNext Logo"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-sky-500 font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-sky-500 font-medium transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-sky-500 font-medium transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-sky-500 text-white px-6 py-2.5 rounded-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Contacto
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-sky-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left text-gray-700 hover:text-sky-500 font-medium py-2 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-gray-700 hover:text-sky-500 font-medium py-2 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-700 hover:text-sky-500 font-medium py-2 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors font-medium"
            >
              Contacto
            </button>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a href="tel:+59131234567" className="flex items-center space-x-2 text-gray-600 hover:text-sky-500">
                <Phone size={18} />
                <span>+591 3 123-4567</span>
              </a>
              <a href="mailto:info@servinext.com" className="flex items-center space-x-2 text-gray-600 hover:text-sky-500">
                <Mail size={18} />
                <span>info@servinext.com</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
