import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Home, Wind, Briefcase, Anchor, Navigation as NavigationIcon, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import acomodacao1 from "@/assets/acomodacoes-cozinha.png";
import cabanaInterior from "@/assets/cabana-interior.png";
import salaJantar from "@/assets/sala-jantar.png";
import jantarPraia from "@/assets/jantar-praia.png";
import acomodacoesHeroBg from "@/assets/acomodacoes-hero-bg.jpg";

const Acomodacoes = () => {
  const { t } = useTranslation();

  const comodidades = [
    { icon: Home, key: "privateBathroom" as const },
    { icon: Wind, key: "airConditioning" as const },
    { icon: Briefcase, key: "miniOffice" as const },
    { icon: Anchor, key: "riverAccess" as const }
  ];

  const vantagensIcons = [NavigationIcon, MapPin, Anchor, NavigationIcon, MapPin];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={acomodacoesHeroBg} 
            alt="Acomodações background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/75 to-primary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground text-center mb-6">
            {t.accommodations.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            {t.accommodations.hero.subtitle}
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
            {t.accommodations.floatingCabins.title}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
            <p className="text-base sm:text-lg leading-relaxed">
              {t.accommodations.floatingCabins.description1}
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              {t.accommodations.floatingCabins.description2}
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
            {t.accommodations.advantages.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.accommodations.advantages.items.map((vantagem, index) => {
              const Icon = vantagensIcons[index];
              return (
                <Card key={index} className="border-accent/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <p className="text-foreground text-sm sm:text-base">{vantagem}</p>
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
            {t.accommodations.amenities.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {comodidades.map((item, index) => {
              const Icon = item.icon;
              const amenity = t.accommodations.amenities[item.key];
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground">
                    {amenity.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {amenity.description}
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
            {t.accommodations.whyChoose.title}
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/90 text-center max-w-4xl mx-auto leading-relaxed">
            {t.accommodations.whyChoose.description}
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Acomodacoes;
