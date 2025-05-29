
import { Users, Video, TrendingUp, Megaphone, Camera, Briefcase } from 'lucide-react';

const personas = [
  {
    icon: Video,
    title: "Criadores de Conteúdo",
    description: "YouTubers, TikTokers e influenciadores que precisam de vídeos únicos constantemente"
  },
  {
    icon: TrendingUp,
    title: "Profissionais de Marketing",
    description: "Gestores que precisam criar campanhas visuais impactantes para suas marcas"
  },
  {
    icon: Briefcase,
    title: "Empreendedores Digitais",
    description: "Donos de negócios online que querem comunicar melhor com seus clientes"
  },
  {
    icon: Camera,
    title: "Agências de Vídeo",
    description: "Produtoras que buscam acelerar seus processos criativos"
  },
  {
    icon: Megaphone,
    title: "Social Media Managers",
    description: "Profissionais responsáveis por redes sociais de empresas e marcas"
  },
  {
    icon: Users,
    title: "Early Adopters de IA",
    description: "Entusiastas de tecnologia que gostam de experimentar as novidades primeiro"
  }
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-20 bg-apple-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nosso serviço é para você que...
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seja qual for sua área, o VEO Pro Club foi criado para 
            profissionais que levam criação de vídeos a sério.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <persona.icon className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {persona.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
