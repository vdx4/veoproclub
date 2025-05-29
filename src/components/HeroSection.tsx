
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const HeroSection = () => {
  const handleCTAClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-apple-gray to-white overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent z-0">
        <div className="w-full h-full bg-gradient-to-br from-apple-gray via-white to-apple-gray opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Video Preview Card */}
          <div className="mb-8 mx-auto w-full max-w-2xl">
            <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-sm opacity-60">Embed do vídeo será inserido aqui</p>
                  <p className="text-xs opacity-40 mt-1">Por favor, forneça o link do vídeo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight tracking-tight">
            Nunca mais fique 
            <span className="block text-accent">limitado para criar vídeos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Acesso exclusivo ao Google VEO 3 - a IA mais avançada para criação de vídeos. 
            <span className="block mt-2 font-medium">Gere vídeos ilimitados com qualidade profissional.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleCTAClick}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Quero acesso ao VEO 3
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Ver demonstração
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-4">Mais de 10.000 criadores já têm acesso</p>
            <div className="flex items-center space-x-8 opacity-60">
              <div className="text-xs text-gray-400">⭐⭐⭐⭐⭐ 4.9/5</div>
              <div className="text-xs text-gray-400">🔒 Acesso Seguro</div>
              <div className="text-xs text-gray-400">⚡ Resultados Imediatos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
