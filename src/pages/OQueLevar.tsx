import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shirt, Shield, User, Zap, Fish, Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const OQueLevar = () => {
  const { t } = useTranslation();

  const categoryIcons = [Shirt, Shield, User, Zap];
  const categoryKeys = ["clothing", "protection", "personal", "electronics"] as const;
  const categoryColors = ["text-blue-500", "text-green-500", "text-purple-500", "text-orange-500"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2 mx-auto block w-fit mb-6">{t.whatToBring.hero.badge}</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground text-center mb-6">{t.whatToBring.hero.title}</h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">{t.whatToBring.hero.subtitle}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {categoryKeys.map((key, index) => {
              const Icon = categoryIcons[index];
              const category = t.whatToBring.categories[key];
              return (
                <Card key={index} className="border-accent/20 hover-scale">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center ${categoryColors[index]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl font-serif">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
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

      <section className="py-16 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/30 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4">
                  <Fish className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-3xl font-serif mb-3">{t.whatToBring.equipment.title}</CardTitle>
                <p className="text-muted-foreground text-lg">{t.whatToBring.equipment.subtitle}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">{t.whatToBring.equipment.description}</p>
                <p className="text-base font-bold text-foreground">{t.whatToBring.equipment.note}</p>
                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  {t.whatToBring.equipment.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary" className="px-4 py-2">{badge}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">{t.whatToBring.tips.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { emoji: "🎒", key: "travelLight" as const },
                { emoji: "🌿", key: "respectNature" as const },
                { emoji: "📸", key: "captureMoments" as const }
              ].map((tip, index) => {
                const tipContent = t.whatToBring.tips[tip.key];
                return (
                  <Card key={index} className="border-accent/20">
                    <CardContent className="pt-6 text-center">
                      <div className="text-4xl mb-3">{tip.emoji}</div>
                      <h3 className="font-semibold text-foreground mb-2">{tipContent.title}</h3>
                      <p className="text-sm text-muted-foreground">{tipContent.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default OQueLevar;
