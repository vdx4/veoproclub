
export const FooterSection = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">VEO Pro Club</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Acesso exclusivo ao Google VEO 3 para criadores e profissionais de marketing. 
            Crie vídeos ilimitados com a IA mais avançada do mundo.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Suporte
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contato
            </a>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 VEO Pro Club. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Google VEO 3 é uma marca registrada do Google LLC. 
              Este produto não é afiliado, endossado ou patrocinado pelo Google.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
