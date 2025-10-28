import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Home, Wind, Briefcase, Anchor, Navigation as NavigationIcon, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import acomodacao1 from "@/assets/acomodacoes-1.jpg";
import acomodacao2 from "@/assets/acomodacoes-2.jpg";
import acomodacao3 from "@/assets/acomodacoes-3.jpg";
import acomodacao4 from "@/assets/acomodacoes-4.jpg";
import cabanaInterior from "@/assets/cabana-interior.png";
import salaJantar from "@/assets/sala-jantar.png";
import jantarPraia from "@/assets/jantar-praia.png";

const Acomodacoes = () => {
  const comodidades = [
    { icon: Home, title: "Banheiro Privativo", description: "Cada cabana possui banheiro completo e privativo para seu conforto" },
    { icon: Wind, title: "Ar-Condicionado", description: "Climatização perfeita para relaxar após um dia de pesca" },
    { icon: Briefcase, title: "Mini Escritório", description: "Espaço dedicado para planejamento das pescarias e organização" },
    { icon: Anchor, title: "Acesso Direto ao Rio", description: "Sacada com escada privativa para acesso direto às águas amazônicas" }
  ];

  const vantagens = [
    { icon: NavigationIcon, text: "Mobilidade para buscar melhores níveis de água" },
    { icon: MapPin, text: "Acesso a áreas não sobre-pescadas" },
    { icon: Anchor, text: "Pernoite em praias de areia branca selecionadas" },
    { icon: NavigationIcon, text: "Navegação até cabeceiras de pequenos afluentes" },
    { icon: MapPin, text: "Longe do tumulto de outras operações de pesca" }
  ];


  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground text-center mb-6">
            Acomodações Exclusivas
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Viva uma experiência única em nossas cabanas flutuantes, projetadas para oferecer máximo conforto em harmonia com a natureza amazônica.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={acomodacao1} alt="Vista aérea das cabanas flutuantes" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Cabanas Flutuantes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-8">
            Cabanas Flutuantes
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
            <p className="text-base sm:text-lg leading-relaxed">
              Nossas cabanas flutuantes são amplas e confortáveis, equipadas com banheiro privativo, ar-condicionado, caixa térmica, luzes de leitura, mini escritório e sacada com escada de acesso ao rio. Leves e com excelente flutuabilidade, nossa estrutura adentra até as cabeceiras de pequenos afluentes com lagoas cheias de peixes, longe do tumulto de outras operações de pesca que necessitam canais profundos.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              As cabanas movimentam-se, às vezes diariamente, para trechos de rios não pescados e pernoitam nas praias de areia branca escolhidas a dedo pelo nosso gerente de operação que está presente em cada um dos acampamentos.
            </p>
          </div>
        </div>
      </section>

      {/* Jantar na Praia */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <img 
              src={jantarPraia} 
              alt="Mesa de jantar montada na praia com vista para as cabanas flutuantes" 
              className="w-full h-[500px] md:h-[600px] rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vantagens Exclusivas */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-12">
            Vantagens Exclusivas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {vantagens.map((vantagem, index) => {
              const Icon = vantagem.icon;
              return (
                <Card key={index} className="border-accent/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <p className="text-foreground text-sm sm:text-base">{vantagem.text}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sala de Jantar */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <img 
              src={salaJantar} 
              alt="Sala de jantar das cabanas" 
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Comodidades */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-12">
            Comodidades das Cabanas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {comodidades.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interior da Cabana */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <img 
              src={cabanaInterior} 
              alt="Interior da cabana com cama e mini escritório" 
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground text-center mb-8">
            Por que Escolher Cabanas Flutuantes?
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/90 text-center max-w-4xl mx-auto leading-relaxed">
            Pousadas terrestres não têm mobilidade para buscar melhores níveis de água e suas áreas tornam-se rapidamente sobre-pescadas em um raio de duas a três horas de navegação rio acima e rio abaixo. Nossa mobilidade garante sempre os melhores pontos de pesca.
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Acomodacoes;
