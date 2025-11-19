import { BarChart3, Users, Zap, TrendingUp, Camera, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: BarChart3,
    title: 'Estratégia Digital',
    description: 'Planejamento completo para crescimento e engajamento nas redes sociais',
  },
  {
    icon: Camera,
    title: 'Criação de Conteúdo',
    description: 'Fotos, vídeos e designs profissionais que capturam a atenção',
  },
  {
    icon: Users,
    title: 'Gestão de Comunidade',
    description: 'Interação autêntica e construção de relacionamento com seu público',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento Orgânico',
    description: 'Técnicas comprovadas para aumentar seguidores e alcance',
  },
  {
    icon: Zap,
    title: 'Campanhas Pagas',
    description: 'Publicidade estratégica com ROI máximo',
  },
  {
    icon: MessageSquare,
    title: 'Consultoria',
    description: 'Orientação personalizada para sua marca nas redes sociais',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-0 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Serviços que <span className="text-accent">transformam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em mídia social para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
