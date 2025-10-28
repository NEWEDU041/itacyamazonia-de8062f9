import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Fish, Coffee, Leaf } from "lucide-react";
import gastronomia1 from "@/assets/gastronomia-1.jpg";
import gastronomia2 from "@/assets/gastronomia-2.jpg";
import gastronomia3 from "@/assets/gastronomia-3.jpg";
import gastronomia4 from "@/assets/gastronomia-4.jpg";
import gastronomia5 from "@/assets/gastronomia-5.jpg";
import gastronomia6 from "@/assets/gastronomia-6.jpg";

const Gastronomia = () => {
  const pratos = [
    { 
      image: gastronomia1, 
      name: "Churrasco com cortes nobres",
      description: "Carnes selecionadas preparadas ao ponto perfeito"
    },
    { 
      image: gastronomia2, 
      name: "Açaí e pirarucu frito",
      description: "Combinação autêntica amazônica"
    },
    { 
      image: gastronomia3, 
      name: "Drinks variados",
      description: "Drinks autorais com frutas da região"
    },
    { 
      image: gastronomia4, 
      name: "Sashimi Rústico",
      description: "Peixes frescos da Amazônia"
    },
    { 
      image: gastronomia5, 
      name: "Dadinhos de Tapioca",
      description: "Entrada crocante e irresistível"
    },
    { 
      image: gastronomia6, 
      name: "Costela de Tambaqui e cama de Farinha do Uarini",
      description: "O melhor da culinária regional"
    }
  ];

  const destaques = [
    {
      icon: Fish,
      title: "Peixes Frescos",
      description: "Pescados diariamente nos rios amazônicos"
    },
    {
      icon: Leaf,
      title: "Ingredientes Regionais",
      description: "Cará-roxo, Castanha, Jambú, Açaí e Cupuaçu"
    },
    {
      icon: Utensils,
      title: "Chefs Especializados",
      description: "Pratos elaborados com toque regional"
    },
    {
      icon: Coffee,
      title: "Refeições Inclusas",
      description: "Café da manhã, almoço, jantar e lanches"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2 mx-auto block w-fit mb-6 animate-fade-in">
            Sabores da Amazônia
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground text-center mb-6 animate-fade-in">
            Gastronomia Amazônica
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto animate-fade-in">
            Desfrute da culinária amazônica com ingredientes exclusivos da floresta
          </p>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-6">
            Uma Experiência Gastronômica Única
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            A Amazônia sem dúvidas é o paraíso para qualquer chef de cozinha. Para construir um prato, as possibilidades são enormes, pois há infinitas combinações de ingredientes encontrados apenas na floresta amazônica como Cará-roxo, Castanha do Brasil, Jambú, Açaí e Cupuaçu. Além dos peixes como Jaraqui, Pirarucu e Tambaqui. Em nossas operações de pesca, servimos pratos muito bem elaborados, sem perder o toque regional.
          </p>
        </div>
      </section>

      {/* Destaques Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {destaques.map((destaque, index) => {
              const Icon = destaque.icon;
              return (
                <Card key={index} className="border-accent/20 hover-scale">
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                      {destaque.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {destaque.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pratos Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-4">
            Nossos Pratos
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Cada prato é preparado com dedicação e os melhores ingredientes regionais
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {pratos.map((prato, index) => (
              <Card key={index} className="overflow-hidden hover-scale group border-accent/20">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={prato.image} 
                    alt={prato.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="bg-accent text-accent-foreground mb-3 text-xs">
                        Especialidade
                      </Badge>
                      <h4 className="text-xl font-serif font-bold text-white mb-2">
                        {prato.name}
                      </h4>
                      <p className="text-sm text-white/90">
                        {prato.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Pronto para Saborear a Amazônia?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Reserve sua aventura gastronômica e experimente o melhor da culinária amazônica em nossas expedições de pesca.
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Gastronomia;
