
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Básico",
    price: "R$ 19",
    period: "/pagamento único",
    description: "Para quem deseja testar",
    features: [
      "Acesso vitalício ao Google VEO 3",
      "Gere vídeos ilimitados",
      "Suporte por email",
      "Tutoriais básicos",
    ],
    cta: "Quero comprar",
    popular: false
  },
  {
    name: "Pacote VIP",
    price: "R$ 47",
    period: "/pagamento único",
    description: "Acesso ao nosso super combos de IA",
    features: [
      "Acesso vitalício ao Google VEO 3",
      "Gere vídeos ilimitados",
      "Suporte prioritário via WhatsApp",
      "Tutoriais avançados",
      "🎁: Aprenda os melhores prompts para a IA",
      "🎁: Gamma APP Pro 1 Ano (Gere PDF's com IA)",
      "🎁: Canva PRO 1 Ano",
      "🎁: ChatGPT Plus 1 Ano"
    ],
    cta: "Quero comprar o VIP",
    popular: true
  }
];

export const PricingSection = () => {
  const handlePlanClick = (planName: string) => {
    if (planName === "Básico") {
      window.location.href = "https://checkout.viperpay.com.br/IFJKATLF";
    } else if (planName === "Pacote VIP") {
      window.location.href = "https://checkout.viperpay.com.br/bPrAvbvl";
    }
  };

  return (
    <section id="pricing" className="py-20 bg-apple-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Escolha seu pacote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acesso exclusivo ao Google VEO 3 com condições especiais 
            para membros do VEO Pro Club.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-accent scale-105' : ''
              }`}
            >
              {plan.popular && (
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
  <span className="relative inline-flex items-center justify-center">
    {/* Efeito de pulsar */}
    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping"></span>
    
    {/* Texto */}
    <span className="relative bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold">
      Mais popular
    </span>
  </span>
</div>

              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handlePlanClick(plan.name)}
                className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-accent hover:bg-accent/90 text-white' 
                    : 'bg-primary hover:bg-primary/90 text-white'
                }`}
              >
                {plan.cta}
              </Button>

              {plan.popular && (
                <p className="text-center text-sm text-gray-500 mt-4">
                  🔒 Garantia de 30 dias ou seu dinheiro de volta
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Pagamento 100% seguro • Suporte em português • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};
