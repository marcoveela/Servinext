import { Award, Users, Clock, Target } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: Users,
      value: '+500',
      label: 'Clientes Satisfechos',
      color: 'sky'
    },
    {
      icon: Award,
      value: '+15',
      label: 'Años de Experiencia',
      color: 'blue'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Disponibilidad',
      color: 'cyan'
    },
    {
      icon: Target,
      value: '100%',
      label: 'Compromiso',
      color: 'sky'
    }
  ];

  const values = [
    {
      title: 'Calidad',
      description: 'Servicios profesionales con los más altos estándares de calidad'
    },
    {
      title: 'Confianza',
      description: 'Personal capacitado y certificado en quien puedes confiar'
    },
    {
      title: 'Experiencia',
      description: 'Más de 15 años brindando soluciones empresariales'
    },
    {
      title: 'Innovación',
      description: 'Tecnología y equipos de última generación'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-wide">
            Sobre Nosotros
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            ¿Por qué elegir ServiNext?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa líder en servicios profesionales, comprometida con la excelencia y la satisfacción de nuestros clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-sky-600" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/Imagen de WhatsApp 2025-10-09 a las 00.55.12_be0f8fbb.jpg"
              alt="Equipo ServiNext"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 to-transparent"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Comprometidos con tu Éxito
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                En ServiNext, entendemos que cada negocio es único y tiene necesidades específicas. Por eso, ofrecemos soluciones personalizadas que se adaptan a tus requerimientos, garantizando resultados excepcionales en cada servicio.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestro equipo de profesionales altamente capacitados trabaja con dedicación para mantener tus instalaciones en condiciones óptimas, permitiéndote enfocarte en lo que realmente importa: hacer crecer tu negocio.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-bold text-sky-600 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
