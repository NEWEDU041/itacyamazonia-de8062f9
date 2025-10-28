import { Fish, Home, Utensils, Compass } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Fish,
      title: "Pesca Esportiva",
      description: "Experimente a pesca dos maiores tucunarés e outras espécies amazônicas"
    },
    {
      icon: Home,
      title: "Acomodações Luxuosas",
      description: "Bangalôs confortáveis com vista privilegiada para o rio"
    },
    {
      icon: Utensils,
      title: "Gastronomia Regional",
      description: "Sabores autênticos da Amazônia preparados por chefs especializados"
    },
    {
      icon: Compass,
      title: "Expedições Guiadas",
      description: "Explore a floresta com guias experientes e certificados"
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg hover:bg-white/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
