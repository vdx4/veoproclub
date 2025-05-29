
import { Check, Zap, Shield, BookOpen, Smartphone, Infinity } from 'lucide-react';

const benefits = [
  {
    icon: Infinity,
    title: "Geração de vídeos ilimitada com IA",
    description: "Crie quantos vídeos quiser sem restrições. Sua criatividade é o único limite."
  },
  {
    icon: Zap,
    title: "Acesso antecipado ao Google VEO 3", 
    description: "Seja um dos primeiros a usar a tecnologia mais avançada de IA para vídeos."
  },
  {
    icon: Shield,
    title: "Suporte especializado",
    description: "Equipe dedicada para ajudar você a maximizar seus resultados."
  },
  {
    icon: BookOpen,
    title: "Tutoriais passo a passo",
    description: "Aprenda todas as funcionalidades com nossos guias completos."
  },
  {
    icon: Check,
    title: "Alta resolução e realismo impressionante",
    description: "Vídeos com qualidade profissional indistinguível da realidade."
  },
  {
    icon: Smartphone,
    title: "Funciona no navegador, sem instalações",
    description: "Acesse de qualquer lugar, em qualquer dispositivo, sem complicações."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Por que escolher o VEO Pro Club?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tenha acesso às funcionalidades mais avançadas do Google VEO 3 
            com benefícios exclusivos para profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-apple-gray rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
