
import React, { useState, useEffect, useCallback } from 'react';
import { 
  CheckCircle2, 
  Brain, 
  Dumbbell, 
  Timer, 
  TrendingUp, 
  ShieldCheck, 
  Star, 
  Zap, 
  ChevronDown,
  ArrowRight,
  Gift,
  FileText,
  Lock
} from 'lucide-react';
import { Testimonial, ProductOption, PromotionState } from './types';

// Declare external confetti global
declare const confetti: any;

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Empreendedora",
    image: "https://picsum.photos/id/64/100/100",
    content: "Eu sempre desistia no segundo mês. O conceito do 'Abismo dos 3 Meses' me abriu os olhos. Hoje sou outra pessoa e a academia virou meu ritual sagrado.",
    rating: 5
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    role: "Desenvolvedor",
    image: "https://picsum.photos/id/91/100/100",
    content: "O Hack de Dopamina mudou tudo. Agora eu entendo por que não tinha motivação e como criar recompensas reais. Já são 4 meses de constância!",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Claudia",
    role: "Mãe e Nutricionista",
    image: "https://picsum.photos/id/65/100/100",
    content: "A Regra dos 66 dias foi o que eu precisava. Sem promessas milagrosas de 21 dias. Pé no chão e ciência pura. Recomendo demais!",
    rating: 5
  }
];

const App: React.FC = () => {
  const [promoState, setPromoState] = useState<PromotionState>(PromotionState.NONE);
  const [selectedOption, setSelectedOption] = useState<'basic' | 'complete' | null>(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#6366f1', '#ec4899']
    });
  };

  const handleSelectBasic = () => {
    if (promoState === PromotionState.NONE) {
      setPromoState(PromotionState.ACTIVATED);
      triggerConfetti();
      window.scrollTo({ top: document.getElementById('offers')?.offsetTop, behavior: 'smooth' });
    }
    setSelectedOption('basic');
  };

  const handleSelectComplete = () => {
    setSelectedOption('complete');
    // Simulate redirection
    window.location.href = "https://pay.hotmart.com/example";
  };

  const basicPrice = 6.90;
  const completePrice = promoState === PromotionState.ACTIVATED ? 9.90 : 14.90;
  const anchorValue = 29.00;

  return (
    <div className="min-h-screen gradient-bg selection:bg-purple-500/30">
      {/* Header / Banner Sticky */}
      {promoState === PromotionState.ACTIVATED && (
        <div className="fixed top-0 left-0 w-full bg-purple-600 text-white py-2 z-50 animate-bounce flex items-center justify-center font-bold px-4 text-center">
          <Zap className="w-5 h-5 mr-2 fill-current" />
          PROMOÇÃO ATIVADA! O pacote completo baixou de R$ 14,90 para apenas R$ 9,90!
          <Zap className="w-5 h-5 ml-2 fill-current" />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-500/10 blur-[120px] rounded-full -z-10" />
        
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-900/30 border border-purple-500/30 rounded-full">
          Neurociência Aplicada ao Treino
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-glow">
          O Código da <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Constância</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-light">
          Pare de lutar contra a sua biologia. Descubra como <strong className="text-white font-semibold">Hackear seu Sistema de Dopamina</strong> e tornar a academia um hábito tão automático quanto escovar os dentes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#offers" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.4)] flex items-center justify-center">
            Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="#benefits" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl font-bold text-lg border border-slate-700 transition-all flex items-center justify-center">
            Ver Método <ChevronDown className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-800 shadow-2xl float-animation">
           <img 
            src="https://picsum.photos/id/180/1200/600" 
            alt="Gym background" 
            className="w-full h-auto object-cover opacity-60 grayscale-[40%]"
           />
        </div>
      </section>

      {/* Benefits / Science Section */}
      <section id="benefits" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Culpa Não é Sua. É da Sua Biologia.</h2>
            <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain className="w-10 h-10 text-purple-500" />}
              title="Hack de Dopamina"
              description="Aprenda a criar recompensas imediatas para o seu cérebro, eliminando a resistência biológica ao esforço físico."
            />
            <FeatureCard 
              icon={<Timer className="w-10 h-10 text-indigo-500" />}
              title="A Regra dos 66 Dias"
              description="O mito dos 21 dias caiu. Conheça a ciência por trás do 'platô de automaticidade' e como chegar lá sem sofrimento."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-10 h-10 text-pink-500" />}
              title="Identidade Atômica"
              description="Mude sua narrativa interna. Deixe de 'tentar ir' e passe a 'ser alguém que treina'. O poder da autoimagem."
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pessoas que Hackearam o Sistema</h2>
          <p className="text-slate-400">Histórias reais de quem transformou a saúde usando o Código da Constância.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* Content Breakdown */}
      <section className="py-24 px-6 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">O que você vai encontrar no Guia:</h2>
          <div className="space-y-6">
            <ContentItem number="01" title="O Abismo dos 3 Meses" desc="Por que 80% das pessoas desistem e como sobreviver a esse período crítico." />
            <ContentItem number="02" title="Arquitetura da Escolha" desc="Técnicas práticas para eliminar a fricção e tornar a ida à academia o caminho mais fácil." />
            <ContentItem number="03" title="Protocolos de Emergência" desc="O que fazer nos dias ruins (Regra dos 5 Minutos e o Treino Meia-Boca)." />
            <ContentItem number="04" title="O Novo Normal" desc="O convite para o desafio de 66 dias que mudará sua vida para sempre." />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offers" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Escolha seu Acesso</h2>
            <p className="text-slate-400">Invista em você hoje por menos de um café por mês.</p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-purple-400 font-medium">
              <ShieldCheck className="w-4 h-4" /> Garantia de Satisfação de 7 Dias
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Option */}
            <div className={`p-8 rounded-3xl border ${promoState === PromotionState.ACTIVATED ? 'border-slate-800 opacity-60' : 'border-purple-500/50 bg-slate-900/50 shadow-lg'} transition-all flex flex-col`}>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Apenas eBook</h3>
                <p className="text-slate-400 text-sm">O guia fundamental em PDF.</p>
              </div>
              <div className="mb-8">
                <span className="text-slate-500 line-through text-lg">R$ {anchorValue.toFixed(2)}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">R$ {basicPrice.toFixed(2).replace('.', ',')}</span>
                  <span className="text-slate-400">/único</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <FeatureItem text="eBook O Código da Constância" />
                <FeatureItem text="Acesso Vitalício" />
              </ul>
              <button 
                onClick={handleSelectBasic}
                disabled={promoState === PromotionState.ACTIVATED}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  promoState === PromotionState.ACTIVATED 
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                  : 'bg-slate-100 text-slate-900 hover:bg-white'
                }`}
              >
                Selecionar Básico
              </button>
            </div>

            {/* Complete Option */}
            <div className={`relative p-8 rounded-3xl border-2 ${promoState === PromotionState.ACTIVATED ? 'border-purple-500 bg-purple-950/20 scale-105 shadow-[0_0_40px_rgba(168,85,247,0.2)]' : 'border-indigo-500/50 bg-slate-900/50 shadow-xl' } transition-all flex flex-col`}>
              {promoState === PromotionState.ACTIVATED && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Melhor Escolha
                </div>
              )}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">Pacote Premium</h3>
                  <Gift className="w-5 h-5 text-indigo-400" />
                </div>
                <p className="text-slate-400 text-sm">A experiência completa para resultados acelerados.</p>
              </div>
              <div className="mb-8">
                <span className="text-slate-500 line-through text-lg">R$ {anchorValue.toFixed(2)}</span>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black ${promoState === PromotionState.ACTIVATED ? 'text-purple-400' : ''}`}>R$ {completePrice.toFixed(2).replace('.', ',')}</span>
                  <span className="text-slate-400">/único</span>
                </div>
                {promoState === PromotionState.ACTIVATED && <p className="text-xs text-green-400 font-bold mt-1">DESCONTO DE FIDELIDADE APLICADO!</p>}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <FeatureItem text="eBook O Código da Constância" />
                <FeatureItem text="2 PDFs: Guia de Hábitos Rápidos" />
                <FeatureItem text="Bônus: Planilha de Ciclo de 66 Dias" />
                <FeatureItem text="Bônus: Audiobook do Guia" highlight />
                <FeatureItem text="Suporte Premium VIP" />
              </ul>
              <button 
                onClick={handleSelectComplete}
                className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-purple-500/20"
              >
                Garantir Pacote Completo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-black uppercase tracking-tighter">Código da Constância</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 - Todos os direitos reservados. Este produto não substitui acompanhamento médico profissional.</p>
          <div className="flex gap-4">
             <Lock className="w-5 h-5 text-slate-700" />
             <div className="flex flex-col text-[10px] text-slate-700 font-bold leading-none">
                <span>PAGAMENTO</span>
                <span>SEGURO</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const FeatureCard: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({ icon, title, description }) => (
  <div className="p-8 rounded-2xl bg-slate-800/20 border border-slate-800 hover:border-slate-700 transition-all">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
  </div>
);

const TestimonialCard: React.FC<{testimonial: Testimonial}> = ({ testimonial }) => (
  <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-800 flex flex-col h-full">
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-purple-500 text-purple-500" />
      ))}
    </div>
    <p className="text-slate-300 italic mb-8 flex-grow">"{testimonial.content}"</p>
    <div className="flex items-center gap-4">
      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-purple-500/20" />
      <div>
        <p className="font-bold text-white text-sm">{testimonial.name}</p>
        <p className="text-slate-500 text-xs">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const ContentItem: React.FC<{number: string, title: string, desc: string}> = ({ number, title, desc }) => (
  <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-slate-800/20 transition-all border border-transparent hover:border-slate-800 group">
    <span className="text-4xl font-black text-slate-800 group-hover:text-purple-900 transition-colors">{number}</span>
    <div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

const FeatureItem: React.FC<{text: string, highlight?: boolean}> = ({ text, highlight }) => (
  <li className={`flex items-start gap-2 text-sm ${highlight ? 'text-indigo-300 font-semibold' : 'text-slate-400'}`}>
    <CheckCircle2 className={`w-5 h-5 shrink-0 ${highlight ? 'text-indigo-400' : 'text-purple-600'}`} />
    {text}
  </li>
);

export default App;
