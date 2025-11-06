import dryZoneMap from "@/assets/dry-zone-map.png";
import { MapPin, Fish, Users, Shield, Award, Waves } from "lucide-react";

const RiverPlateSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Exclusividade Total",
      description: "A empresa detém licenças de pesca exclusivas em 11 rios dentro de reservas indígenas e unidades de conservação, onde só seus hóspedes podem pescar."
    },
    {
      icon: Waves,
      title: "Mobilidade Estratégica",
      description: "Com mais de 12 zonas particulares e acampamentos flutuantes móveis, eles garantem acesso às melhores águas na época certa, superando a variação sazonal dos níveis dos rios."
    },
    {
      icon: MapPin,
      title: "Área Massiva",
      description: "Operam em uma vasta área de 3,5 milhões de hectares, com mais de 1.500 milhas de rios."
    },
    {
      icon: Award,
      title: "Foco no Tucunaré",
      description: "Especializada na pesca do tucunaré, considerado o peixe esportivo de água doce mais agressivo e forte do mundo, com altas chances de capturar exemplares recordes (acima de 9 kg)."
    },
    {
      icon: Fish,
      title: "Outras Espécies",
      description: "Também é possível pescar outras espécies como pirarara, piraíba e traíra."
    },
    {
      icon: Users,
      title: "Compromisso Social e Ambiental",
      description: "Em troca do acesso, a empresa contribui financeiramente com as comunidades locais (os \"guardiões da floresta\") e para a proteção territorial."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            River Plate Anglers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma experiência de pesca esportiva de luxo e exclusiva no coração da Amazônia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={dryZoneMap} 
              alt="Mapa de Zonas Secas da Amazônia" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Principais Diferenciais
            </h3>
            
            <div className="grid gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto bg-muted/30 p-8 rounded-2xl">
            Serviço de pesca de alto padrão, com acesso privilegiado aos melhores locais da Amazônia, 
            focado em proporcionar uma aventura única e de classe mundial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RiverPlateSection;
