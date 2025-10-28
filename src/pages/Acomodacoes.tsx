import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Home, Wind, Briefcase, Anchor, Navigation as NavigationIcon, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import acomodacao1 from "@/assets/acomodacoes-1.jpg";
import acomodacao2 from "@/assets/acomodacoes-2.jpg";
import acomodacao3 from "@/assets/acomodacoes-3.jpg";
import acomodacao4 from "@/assets/acomodacoes-4.jpg";
import gastronomia1 from "@/assets/gastronomia-1.jpg";
import gastronomia2 from "@/assets/gastronomia-2.jpg";
import gastronomia3 from "@/assets/gastronomia-3.jpg";
import gastronomia4 from "@/assets/gastronomia-4.jpg";
import gastronomia5 from "@/assets/gastronomia-5.jpg";
import gastronomia6 from "@/assets/gastronomia-6.jpg";

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

  const pratos = [
    { image: gastronomia1, name: "Tambaqui Grelhado" },
    { image: gastronomia2, name: "Molho de Açaí com Camarões" },
    { image: gastronomia3, name: "Tacacá Amazônico" },
    { image: gastronomia4, name: "Camarões ao Vinho Branco" },
    { image: gastronomia5, name: "Queijo Coalho Empanado" },
    { image: gastronomia6, name: "Peixe na Crosta Dourada" }
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
            <img src={acomodacao2} alt="Mesa de jantar na praia" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
            <img src={acomodacao3} alt="Interior da cabana" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
            <img src={acomodacao4} alt="Sala de jantar" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
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

      {/* Comodidades */}
      <section className="py-16 bg-background">
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

      {/* Gastronomia Section */}
      <section id="gastronomia" className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-4">
            GASTRONOMIA
          </h2>
          <h3 className="text-xl sm:text-2xl font-serif text-foreground text-center mb-6">
            Desfrute da culinária amazônica
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-12">
            A amazônia sem duvidas é o paraíso para qualquer chef de cozinha, para construir um prato as possibilidades são enormes, pois há infinitas combinações de ingredientes que são encontrados apenas na floresta amazônica como Cará-roxo, Castanha do Brasil, Jambú, Açaí e Cupuaçú. Além dos peixes como Jaraqui, Pirarucu e Tambaqui. Em nossas operações de pesca, servimos pratos muito bem elaborados. Mas sem perder o toque regional.
          </p>
          
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {pratos.map((prato, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
                      <img 
                        src={prato.image} 
                        alt={prato.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h4 className="text-xl font-serif font-bold text-white">
                            {prato.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-4" />
              <CarouselNext className="right-2 sm:right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Acomodacoes;
