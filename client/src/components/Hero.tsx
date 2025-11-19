import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 md:px-0">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Especialista em Mídia Social</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme sua <span className="text-accent">presença digital</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Estratégias criativas e resultados reais para sua marca. Vamos crescer juntos nas redes sociais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 group"
              >
                Começar Agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Saiba Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">500+</div>
                <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">10M+</div>
                <p className="text-sm text-muted-foreground">Alcance Total</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">5+</div>
                <p className="text-sm text-muted-foreground">Anos Experiência</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 md:p-12 border border-accent/20">
              <div className="aspect-square bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center text-white text-6xl md:text-8xl font-bold">
                    👤
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border">
                <p className="text-sm font-medium">Pronto para crescer?</p>
                <p className="text-xs text-muted-foreground mt-1">Vamos criar uma estratégia vencedora para você</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
