
const testimonials = [
  {
    name: "Carla Silva",
    role: "Editora de Vídeos",
    company: "CreativeStudio",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=64&h=64&fit=crop&crop=face",
    content: "O VEO 3 revolucionou meu workflow. Consigo criar vídeos que antes levariam horas em poucos minutos. A qualidade é impressionante!"
  },
  {
    name: "Lucas Mendes", 
    role: "Gestor de Tráfego",
    company: "Digital Growth",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    content: "Meus anúncios nunca tiveram uma performance tão boa. O VEO 3 me permite testar centenas de variações criativas rapidamente."
  },
  {
    name: "Ana Costa",
    role: "YouTuber",
    company: "Canal TechReview",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face", 
    content: "Criei mais de 100 vídeos no primeiro mês. O acesso antecipado me deu uma vantagem competitiva enorme no YouTube."
  },
  {
    name: "Pedro Santos",
    role: "Diretor Criativo", 
    company: "Agência Pixel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    content: "Nossos clientes ficaram impressionados com a velocidade de entrega. Conseguimos quadruplicar nossa capacidade produtiva."
  },
  {
    name: "Marina Oliveira",
    role: "Social Media Manager",
    company: "Brand Connect",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
    content: "Nunca vi uma ferramenta tão intuitiva. Em 5 minutos já estava criando conteúdo profissional para todas as redes sociais."
  },
  {
    name: "Rafael Lima",
    role: "Empreendedor Digital",
    company: "EcoCommerce",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    content: "ROI incrível! Economizei mais de R$ 20.000 em produção de vídeos no primeiro trimestre. O VEO Pro Club se pagou sozinho."
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            O que nossos membros dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais de todo o Brasil já estão criando resultados 
            extraordinários com acesso ao VEO 3.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-apple-gray rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex text-yellow-400 text-sm mt-3">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
