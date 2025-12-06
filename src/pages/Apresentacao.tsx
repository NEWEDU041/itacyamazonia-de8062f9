import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, MapPin, Fish, Ship, Users, Calendar, Utensils, Home as HomeIcon, Award } from "lucide-react";
import { useEffect } from "react";

// Images
import presentationCover from "@/assets/presentation-cover.jpg";
import presentationAmazonia from "@/assets/amazonia-rio-aereo.png";
import presentationMap from "@/assets/dry-zone-map.png";
import presentationDiferenciais from "@/assets/presentation-diferenciais.jpg";
import presentationTucunare from "@/assets/presentation-tucunare.jpg";
import presentationCabanas from "@/assets/presentation-cabanas.jpg";
import presentationRestaurante from "@/assets/presentation-restaurante.jpg";
import presentationBarcos from "@/assets/presentation-barcos.jpg";

const Apresentacao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    { name: "Rio Itapará", price: "R$ 31.000,00", fishermen: "4 pescadores", waters: "Águas Negras", transport: "Hidroavião" },
    { name: "Rio Matá-Matá", price: "R$ 28.000,00", fishermen: "4 pescadores", waters: "Águas Turvas", transport: "Hidroavião" },
    { name: "Rio Jufarí", price: "R$ 31.000,00", fishermen: "4 pescadores", waters: "Águas Cristalinas", transport: "Hidroavião" },
    { name: "Rio Amajaú", price: "R$ 28.000,00", fishermen: "4 pescadores", waters: "Águas Negras", transport: "Hidroavião" },
    { name: "Rio Xeriuní", price: "R$ 31.000,00", fishermen: "4 pescadores", waters: "Águas Cristalinas", transport: "Hidroavião" },
    { name: "Rio Uneuixi", price: "R$ 38.000,00", fishermen: "4 pescadores", waters: "Águas Cristalinas", transport: "Hidroavião" },
    { name: "Rio Marmelos", price: "R$ 31.000,00", fishermen: "4 pescadores", waters: "Águas Negras", transport: "Hidroavião" },
    { name: "Rio Caeteté", price: "R$ 35.000,00", fishermen: "4 pescadores", waters: "Águas Cristalinas", transport: "Hidroavião" },
    { name: "Rio Matupirí", price: "R$ 28.000,00", fishermen: "4 pescadores", waters: "Águas Negras", transport: "Hidroavião" },
    { name: "Rio Jatapú", price: "R$ 35.000,00", fishermen: "4 pescadores", waters: "Águas Cristalinas", transport: "Hidroavião" },
    { name: "Rio Igapó-Açú", price: "R$ 28.000,00", fishermen: "4 pescadores", waters: "Águas Negras", transport: "Hidroavião" },
    { name: "Baixo Itapará", price: "R$ 23.000,00", fishermen: "4 pescadores", waters: "Águas Negras", transport: "Hidroavião" },
  ];

  const included = [
    "Aéreo Manaus/Acampamento ida e volta",
    "Todas as refeições (café, almoço, jantar, lanches e petiscos)",
    "Bebidas não alcoólicas à vontade (água, café, chá, sucos)",
    "Cervejas e drinks com moderação",
    "Acomodação em cabanas flutuantes",
    "Equipamentos de pesca profissionais",
    "Barcos de pesca com guias especializados",
    "Combustível para os barcos",
    "Comunicação via satélite",
    "Seguro de viagem",
  ];

  const notIncluded = [
    "Passagem aérea até Manaus",
    "Hospedagem em Manaus (antes e depois)",
    "Bebidas especiais ou em excesso",
    "Equipamentos pessoais de pesca (opcional)",
    "Seguro de cancelamento de viagem",
    "Gorjetas para a equipe (sugerido 10-15%)",
    "Despesas pessoais",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Cover */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${presentationCover})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <Badge className="mb-6 bg-accent/90 text-accent-foreground px-6 py-2 text-sm">
            Experiência Premium de Pesca na Amazônia
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            RIVER PLATE
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-accent mb-6 drop-shadow-2xl">
            ANGLERS
          </h2>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
            In the Amazon since 1992
          </p>
        </div>
      </section>

      {/* Section 2: Amazônia Intocada */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent/20 text-accent">Gigantesco Tapete Verde</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                AMAZÔNIA INTOCADA
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Em um mundo em que as fronteiras estão desaparecendo a cada dia, permanece um gigantesco tapete verde que desafia qualquer descrição.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Em um círculo de 1.600 quilômetros de diâmetro centrado em Manaus, no coração da floresta amazônica, estão os <span className="text-accent font-semibold">3,5 milhões de hectares</span> com águas cristalinas e acesso restrito, onde nossos Mobile Safari Camps operam.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esses acampamentos únicos combinam serviço de classe mundial e conforto em uma pequena atmosfera de acampamento com o máximo em aventura para criar uma verdadeira experiência de vida na Amazônia.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src={presentationAmazonia} 
                alt="Amazônia Intocada" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Dry-Zone Map */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">DRY-ZONE MAP</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A River Plate Anglers detém licenças exclusivas de pesca em mais de <span className="text-accent font-semibold">1.500 milhas de águas</span> que antes estavam trancadas dentro de reservas indígenas e reservas governamentais.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
              Em troca desses privilégios, contribuímos com a proteção territorial e realizamos importantes compromissos financeiros humanitários com as comunidades tradicionais, que denominamos <span className="text-accent font-semibold">guardiões da floresta</span>.
            </p>
          </div>

          <div className="mb-16 animate-fade-in flex justify-center">
            <img 
              src={presentationMap} 
              alt="Dry Zone Map" 
              className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto rounded-xl shadow-xl object-contain"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-card border-accent/20">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">4 Zonas Secas</h3>
              <p className="text-muted-foreground">
                A excelente pesca do tucunaré ocorre somente em níveis de água ideais por apenas 60 a 80 dias por temporada.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-card border-accent/20">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">1.500 Milhas</h3>
              <p className="text-muted-foreground">
                Licenças exclusivas em mais de 1.500 milhas de águas pristinas e protegidas.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-card border-accent/20">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">12 Zonas Distintas</h3>
              <p className="text-muted-foreground">
                Acesso às águas que correm no nível certo durante toda a temporada de pesca.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Nossos Diferenciais */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${presentationDiferenciais})` }}
        >
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
            NOSSOS DIFERENCIAIS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/95 backdrop-blur-sm border-accent/20 hover:border-accent transition-colors animate-fade-in">
              <div className="text-accent text-4xl font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Direitos Exclusivos de Pesca
              </h3>
              <p className="text-muted-foreground">
                <span className="text-accent font-semibold">11 rios exclusivos</span> em unidades de conservação e terras indígenas onde não há pressão de pesca por ninguém além de nossos privilegiados hóspedes.
              </p>
            </Card>

            <Card className="p-8 bg-card/95 backdrop-blur-sm border-accent/20 hover:border-accent transition-colors animate-fade-in">
              <div className="text-accent text-4xl font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Área Massiva para Explorar
              </h3>
              <p className="text-muted-foreground">
                Nossas zonas estão espalhadas por <span className="text-accent font-semibold">1.000 x 600 milhas</span>, com 11 sistemas fluviais privados fluindo através de 16 milhões de acres.
              </p>
            </Card>

            <Card className="p-8 bg-card/95 backdrop-blur-sm border-accent/20 hover:border-accent transition-colors animate-fade-in">
              <div className="text-accent text-4xl font-bold mb-4">03</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Mobilidade Estratégica
              </h3>
              <p className="text-muted-foreground">
                Cabanas flutuantes com calado raso que navegam em apenas <span className="text-accent font-semibold">10" de água</span>, permitindo acesso além das barreiras de águas rasas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Uma Luta Como Nenhuma Outra */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${presentationTucunare})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-6 bg-accent/90 text-accent-foreground">O Peixe Mais Agressivo do Mundo</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              UMA LUTA COMO NENHUMA OUTRA
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Considerado o peixe esportivo mais agressivo do mundo, o feroz <span className="text-accent font-semibold">Tucunaré</span> oferece uma experiência de pesca ininterrupta e de parar o coração.
            </p>

            <div className="space-y-6 bg-black/40 backdrop-blur-sm p-8 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-3">O Guerreiro das Águas Amazônicas</h3>
                <p className="text-white/90 leading-relaxed">
                  Esses poderosos lutadores batem como um trem de carga e são os peixes de água doce que lutam mais duramente em todo o mundo.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent mb-3">Recordes</h3>
                <p className="text-white/90 leading-relaxed">
                  A maioria dos nossos convidados conquistaram o maior tucunaré de suas vidas. Troféus pesando <span className="text-accent font-semibold">mais de 20 libras</span> e inclusive alguns recordes mundiais.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent mb-3">Outras Espécies</h3>
                <p className="text-white/90 leading-relaxed">
                  Além do tucunaré, você poderá capturar pirararas, piraíbas, traíras, matrinxãs, apaiaris e aruanãs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Cabanas Flutuantes */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              CABANAS FLUTUANTES
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Infraestrutura e Serviços de Classe Mundial
            </p>
          </div>

          <div className="mb-12 animate-fade-in">
            <img 
              src={presentationCabanas} 
              alt="Cabanas Flutuantes" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in">
            <Card className="p-8 border-accent/20 hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-6">Cabanas Modernas</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Ar condicionado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Energia solar off-grid</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Ducha com água aquecida</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">02 camas king solteiro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Comunicação via satélite</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-accent/20 hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-6">Mobilidade Única</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nossos Camps se movimentam ao longo de todo território de abrangência de nossas licenças, distribuindo a pressão de pesca de forma igualitária e causando o menor impacto possível.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pernoitamos em belíssimas <span className="text-accent font-semibold">praias de areia branca</span> da Amazônia.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7: Restaurante */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${presentationRestaurante})` }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Sabores que Celebram a Pesca e a Natureza
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 bg-card/95 backdrop-blur-sm text-center">
                <Utensils className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Refeições Completas</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>🥣 Sopa reconfortante</li>
                  <li>🥗 Salada fresca</li>
                  <li>🍽 Prato principal</li>
                  <li>🍮 Sobremesa</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/95 backdrop-blur-sm text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Destaque Especial</h3>
                <p className="text-muted-foreground">
                  Churrasco especial na praia com cortes nobres e experiência única sob as estrelas amazônicas.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Pescaria de Classe Mundial */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in">
            PESCARIA DE CLASSE MUNDIAL
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="animate-fade-in">
              <Card className="p-8 h-full border-accent/20">
                <Ship className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossos Barcos de Pesca</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Barcos modernos e confortáveis, equipados com motores potentes, GPS, e todos os equipamentos de segurança. Cada barco acomoda 2 pescadores com 1 guia especializado.
                </p>
              </Card>
            </div>

            <div className="animate-fade-in">
              <Card className="p-8 h-full border-accent/20">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossos Guias Experientes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Guias locais com décadas de experiência, conhecedores profundos dos rios, comportamento dos peixes e técnicas de pesca. Fluentes em português, inglês e espanhol.
                </p>
              </Card>
            </div>
          </div>

          <div className="animate-fade-in">
            <img 
              src={presentationBarcos} 
              alt="Barcos de Pesca" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Sections 9-10: Pacotes Premium */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent">Pacotes Exclusivos 2026</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              RIOS PREMIUM
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha seu destino entre nossos 12 rios exclusivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all hover:border-accent border-accent/20 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <Fish className="w-6 h-6 text-accent" />
                </div>
                
                <div className="text-3xl font-bold text-accent mb-4">{pkg.price}</div>
                
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{pkg.fishermen}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{pkg.waters}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ship className="w-4 h-4 text-accent" />
                    <span>{pkg.transport}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>7 dias / 6,5 de pesca</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Informações */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in">
            INFORMAÇÕES DO PACOTE
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-accent/20 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                O PACOTE INCLUI
              </h3>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-accent/20 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <X className="w-6 h-6 text-destructive" />
                NÃO INCLUI
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 12: Planejando Sua Viagem */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              PLANEJANDO SUA VIAGEM
            </h2>
            <p className="text-xl text-muted-foreground">Seu itinerário passo a passo</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 border-accent/20 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Chegada em Manaus</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Sexta-feira:</span> Chegada ao Aeroporto de Manaus. Hospedagem em hotel (não incluso). Jantar de boas-vindas (opcional).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-accent/20 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Traslado para Acampamento</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Sábado manhã:</span> Voo de hidroavião para o acampamento (1-2 horas). Almoço de boas-vindas. Briefing de segurança e primeira saída de pesca.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-accent/20 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Programação de Pesca</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">6,5 dias completos:</span> Saídas diárias às 7h e retorno ao entardecer. Todas as refeições incluídas. Mudança de locais conforme níveis de água.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-accent/20 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Retorno</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Sexta-feira:</span> Pesca pela manhã. Almoço e retorno a Manaus de hidroavião. Conexões para voos internacionais.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 13: Contato */}
      <section className="py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-accent/90 text-accent-foreground px-6 py-2">
              Entre em Contato
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              RESERVE SUA AVENTURA
            </h2>

            <Card className="p-8 md:p-12 border-accent/20 mb-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg">
                  <a 
                    href="https://wa.me/5597984058184" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-2"
                  >
                    📱 WhatsApp: +55 97 98405-8184
                  </a>
                  <span className="hidden md:inline text-muted-foreground">|</span>
                  <a 
                    href="tel:18002314975"
                    className="text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-2"
                  >
                    ☎️ Tel: 1-800-231-4975
                  </a>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg">
                  <a 
                    href="mailto:robson@riverplateoutfitters.com"
                    className="text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-2"
                  >
                    ✉️ robson@riverplateoutfitters.com
                  </a>
                  <span className="hidden md:inline text-muted-foreground">|</span>
                  <a 
                    href="https://www.riverplateanglers.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-2"
                  >
                    🌐 riverplateanglers.com
                  </a>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                asChild
              >
                <a href="https://wa.me/5597984058184" target="_blank" rel="noopener noreferrer">
                  Fale Conosco no WhatsApp
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-semibold px-8"
                asChild
              >
                <a href="https://us2.cloudbeds.com/reservas/PAWNo0" target="_blank" rel="noopener noreferrer">
                  Reservar Online
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apresentacao;
