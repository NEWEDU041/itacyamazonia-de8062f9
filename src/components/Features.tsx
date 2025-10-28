import { Fish, Home, Utensils, Compass } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Fish,
      titleKey: "sportFishing" as const,
    },
    {
      icon: Home,
      titleKey: "luxuryAccommodations" as const,
    },
    {
      icon: Utensils,
      titleKey: "regionalCuisine" as const,
    },
    {
      icon: Compass,
      titleKey: "guidedExpeditions" as const,
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
                  {t.features[feature.titleKey].title}
                </h3>
                <p className="text-muted-foreground">
                  {t.features[feature.titleKey].description}
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
