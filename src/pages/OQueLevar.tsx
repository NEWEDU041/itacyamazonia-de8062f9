import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shirt, Shield, User, Zap, Fish, Check } from "lucide-react";

const OQueLevar = () => {
  const categorias = [
    {
      icon: Shirt,
      title: "Vestuário",
      color: "text-blue-500",
      items: [
        "Roupas leves e de secagem rápida",
        "Calças compridas para proteção",
        "Camisas de manga longa",
        "Chapéu ou boné",
        "Roupas de banho",
        "Calçados confortáveis e antiderrapantes"
      ]
    },
    {
      icon: Shield,
      title: "Proteção",
      color: "text-green-500",
      items: [
        "Protetor solar FPS 60+",
        "Repelente de insetos",
        "Óculos de sol",
        "Luvas de pesca (opcional)",
        "Capa de chuva leve"
      ]
    },
    {
      icon: User,
      title: "Itens Pessoais",
      color: "text-purple-500",
      items: [
        "Medicamentos de uso pessoal",
        "Kit de higiene pessoal",
        "Toalhas de banho",
        "Produtos de limpeza biodegradáveis"
      ]
    },
    {
      icon: Zap,
      title: "Eletrônicos",
      color: "text-orange-500",
      items: [
        "Câmera fotográfica",
        "Carregadores",
        "Power bank",
        "Sacos plásticos para proteção",
        "Cartões de memória extras"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2 mx-auto block w-fit mb-6">
            Checklist Completo
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground text-center mb-6">
            O Que Levar
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Preparamos uma lista completa para que você não esqueça nada importante e aproveite ao máximo sua experiência na Amazônia.
          </p>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {categorias.map((categoria, index) => {
              const Icon = categoria.icon;
              return (
                <Card key={index} className="border-accent/20 hover-scale">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center ${categoria.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl font-serif">
                        {categoria.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {categoria.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipamentos Inclusos */}
      <section className="py-16 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/30 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4">
                  <Fish className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-3xl font-serif mb-3">
                  Equipamentos de Pesca Inclusos
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Não se preocupe com equipamentos de pesca!
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Fornecemos varas, molinetes, iscas e todos os acessórios necessários. Nossos equipamentos são de primeira linha e adequados para as espécies locais.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  <Badge variant="secondary" className="px-4 py-2">
                    Varas Profissionais
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    Molinetes de Alta Performance
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    Iscas Variadas
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    Acessórios Completos
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
              Dicas Importantes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="border-accent/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">🎒</div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Viaje Leve
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Leve apenas o essencial para maior mobilidade
                  </p>
                </CardContent>
              </Card>
              <Card className="border-accent/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">🌿</div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Respeite a Natureza
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Use produtos biodegradáveis sempre que possível
                  </p>
                </CardContent>
              </Card>
              <Card className="border-accent/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">📸</div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Registre Momentos
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Não esqueça cartões de memória extras
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default OQueLevar;
