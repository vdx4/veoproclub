
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
    question: "Como vocês conseguem vender tão barato?",
    answer: "Iremos ensinar alguns dos métodos que usamos e que permitem gerar cadastros com assinatura ativa de forma vitalícia; você pode criar novos cadastros sempre que precisar. O valor cobrado serve para fornecer esse método e oferecer nosso suporte."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Após a confirmação do pagamento, você receberá por email suas credenciais de acesso e um tutorial completo. O processo é automático e leva no máximo 5 minutos."
  },
  {
    question: "Posso gerar quantos vídeos quiser?",
    answer: "Sim, você poderá gerar vídeos ilimitados. A cada 10 vídeos gerados no mesmo mês, será necessário criar um novo cadastro — sem custo adicional. Nós ensinaremos exatamente como fazer isso."
  },
  {
    question: "O suporte está incluso?",
    answer: "Sim! Todos os membros têm acesso ao nosso suporte especializado. O plano mensal inclui suporte por email, enquanto o plano vitalício oferece suporte prioritário com resposta em até 2 horas."
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
    <a
      href="https://www.instagram.com/veo3pro/"
      rel="noopener noreferrer"
      className="text-accent font-medium ml-1 cursor-pointer hover:underline"
    >
      Entre em contato conosco
    </a>
  </p>
</div>
      </div>
    </section>
  );
};
