import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Plane, Calendar, Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import pacotesHeroBg from "@/assets/pacotes-hero-bg.jpg";

const Pacotes = () => {
  const { t } = useTranslation();

  const premiumPackages = [
    { river: "Alto Itapará", riverEn: "Itapara Upper", price: "6,490", featured: false },
    { river: "Alto Jufari", riverEn: "Jufari Upper", price: "6,490", featured: false },
    { river: "Alto Abacaxis", riverEn: "Abacaxis Upper", price: "6,490", featured: false },
    { river: "Rio Uneuixi", riverEn: "Uniuixi River", price: "6,990", featured: true }
  ];

  const standardPackages = [
    { river: "Alto Itapará", riverEn: "Itapara Upper", price: "5,490" },
    { river: "Alto Jufari", riverEn: "Jufari Upper", price: "5,490" },
    { river: "Rio Paratucu", riverEn: "Paratucu River", price: "5,490" },
    { river: "Alto Uneuixi", riverEn: "Uneuixi Upper", price: "5,990" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={pacotesHeroBg} 
            alt="Pacotes background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/75 to-primary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-6">
            <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2">{t.packages.hero.badge}</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground">{t.packages.hero.title}</h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto">{t.packages.hero.subtitle}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Premium Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-accent-foreground text-lg px-6 py-2 mb-4">{t.packages.premium.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">{t.packages.premium.title}</h2>
            <p className="text-muted-foreground text-lg">{t.packages.premium.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {premiumPackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden hover-scale ${pkg.featured ? 'ring-2 ring-accent shadow-lg' : ''}`}>
                {pkg.featured && <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">{t.packages.premium.popular}</div>}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-serif text-foreground">{pkg.river}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.riverEn}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4 bg-secondary/50 rounded-lg">
                    <div className="text-4xl font-bold text-foreground">${pkg.price}</div>
                    <p className="text-xs text-muted-foreground mt-2">{t.packages.premium.perFisherman}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground"><Users className="w-4 h-4 text-accent" /><span>{t.packages.premium.group}</span></div>
                    <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="w-4 h-4 text-accent" /><span>{t.packages.premium.days}</span></div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <a href="https://wa.me/5565999036367" target="_blank" rel="noopener noreferrer">{t.packages.premium.bookNow}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto bg-secondary/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4"><Plane className="w-5 h-5 text-accent" /><h3 className="text-lg font-semibold text-foreground">{t.packages.benefits.title}</h3></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.packages.benefits.items.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2"><Check className="w-5 h-5 text-accent flex-shrink-0" /><span className="text-sm text-muted-foreground">{benefit}</span></div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Standard Packages */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-primary-foreground text-lg px-6 py-2 mb-4">{t.packages.standard.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">{t.packages.standard.title}</h2>
            <p className="text-muted-foreground text-lg">{t.packages.standard.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {standardPackages.map((pkg, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-serif text-foreground">{pkg.river}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.riverEn}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4 bg-secondary/50 rounded-lg">
                    <div className="text-4xl font-bold text-foreground">${pkg.price}</div>
                    <p className="text-xs text-muted-foreground mt-2">{t.packages.standard.perFisherman}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground"><Users className="w-4 h-4 text-accent" /><span>{t.packages.standard.group}</span></div>
                    <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="w-4 h-4 text-accent" /><span>{t.packages.standard.days}</span></div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <a href="https://wa.me/5565999036367" target="_blank" rel="noopener noreferrer">{t.packages.standard.bookNow}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground mb-6">{t.packages.cta.title}</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">{t.packages.cta.description}</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" asChild>
            <a href="https://wa.me/5565999036367" target="_blank" rel="noopener noreferrer">{t.packages.cta.button}</a>
          </Button>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Pacotes;
