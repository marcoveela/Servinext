import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
                Servicios Profesionales
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Soluciones Integrales para tu{' '}
              <span className="text-sky-500">Empresa</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              En ServiNext ofrecemos servicios profesionales de limpieza, seguridad, jardinería y control de plagas.
              Calidad, confianza y experiencia al servicio de tu negocio.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-sky-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Personal altamente capacitado y certificado</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-sky-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Equipos y tecnología de última generación</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-sky-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Disponibilidad 24/7 para tu tranquilidad</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group bg-sky-500 text-white px-8 py-4 rounded-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={scrollToServices}
                className="bg-white text-sky-600 px-8 py-4 rounded-lg border-2 border-sky-500 hover:bg-sky-50 transition-all duration-300 font-semibold"
              >
                Ver Servicios
              </button>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/Imagen de WhatsApp 2025-10-08 a las 22.43.45_79c41f67.jpg"
                alt="Servicios ServiNext"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-sky-100 p-3 rounded-lg">
                  <CheckCircle className="text-sky-600" size={32} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">+500</p>
                  <p className="text-gray-600">Clientes Satisfechos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
