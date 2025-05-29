
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "O que é o Google VEO 3?",
    answer: "O VEO 3 é a mais recente e avançada tecnologia de inteligência artificial do Google para geração de vídeos. Ele permite criar vídeos realistas a partir de simples descrições de texto, com qualidade profissional e detalhes impressionantes."
  },
  {
    question: "É seguro usar essa IA?",
    answer: "Sim, completamente seguro. O VEO 3 é desenvolvido pelo Google seguindo os mais altos padrões de segurança e privacidade. Nosso acesso é oficial e todos os dados são protegidos por criptografia de ponta."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Após a confirmação do pagamento, você receberá por email suas credenciais de acesso e um tutorial completo. O processo é automático e leva no máximo 5 minutos."
  },
  {
    question: "Posso gerar quantos vídeos quiser?",
    answer: "Depende do seu plano. No plano mensal você tem 50 vídeos/mês. No plano vitalício, você tem acesso totalmente ilimitado - pode gerar quantos vídeos precisar, sem restrições."
  },
  {
    question: "O suporte está incluso?",
    answer: "Sim! Todos os membros têm acesso ao nosso suporte especializado. O plano mensal inclui suporte por email, enquanto o plano vitalício tem suporte prioritário com resposta em até 2 horas."
  },
  {
    question: "O acesso é imediato?",
    answer: "Sim, assim que seu pagamento for confirmado, você recebe acesso instantâneo à plataforma. Nosso sistema é automatizado e funciona 24/7, incluindo finais de semana e feriados."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire todas suas dúvidas sobre o VEO Pro Club
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-apple-gray rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Ainda tem dúvidas? 
            <span className="text-accent font-medium ml-1 cursor-pointer hover:underline">
              Entre em contato conosco
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
