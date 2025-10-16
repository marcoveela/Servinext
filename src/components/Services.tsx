import { Sparkles, Shield, Leaf, Bug, ArrowRight } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Sparkles,
  Shield,
  Leaf,
  Bug
};

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-wide">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Soluciones Profesionales para tu Negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios integrales con los más altos estándares de calidad y profesionalismo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-sky-500 p-3 rounded-lg inline-block mb-3">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="bg-sky-100 p-1 rounded-full mt-0.5">
                          <ArrowRight className="text-sky-600" size={16} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className="w-full bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all duration-300 font-semibold group-hover:shadow-lg"
                  >
                    Solicitar Servicio
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
