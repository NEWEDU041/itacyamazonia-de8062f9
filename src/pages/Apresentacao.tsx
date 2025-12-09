import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, MapPin, Fish, Ship, Users, Calendar, Utensils, Home, Award, Thermometer, Sun, Droplets, Bed, Archive, Laptop, Satellite } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

// Images
import presentationCover from "@/assets/presentation-cover.jpg";
import presentationAmazonia from "@/assets/amazonia-rio-aereo.png";
import presentationMap from "@/assets/dry-zone-map.png";
import presentationDiferenciais from "@/assets/presentation-diferenciais.jpg";
import presentationTucunare from "@/assets/presentation-tucunare.jpg";
import presentationCabanas from "@/assets/presentation-cabanas.jpg";
import presentationRestaurante from "@/assets/presentation-restaurante.jpg";
import presentationBarcos from "@/assets/presentation-barcos.jpg";
import heroCabanasFlutuantes from "@/assets/hero-cabanas-flutuantes.png";
import tucunarePesca from "@/assets/tucunare-pesca.png";
import cabanaInterior from "@/assets/cabana-interior.png";
import cabanasComboio from "@/assets/cabanas-comboio.png";
const Apresentacao = () => {
  const {
    t
  } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const packages = [{
    name: "Rio Itapará",
    price: "R$ 31.000",
    fishermen: "4",
    waters: "clearWaters" as const,
    transport: "Hidroavião",
    waterType: "cristalinas",
    highlight: false
  }, {
    name: "Rio Matá-Matá",
    price: "R$ 28.000",
    fishermen: "4",
    waters: "murkyWaters" as const,
    transport: "Hidroavião",
    waterType: "turvas",
    highlight: false
  }, {
    name: "Rio Jufarí",
    price: "R$ 31.000",
    fishermen: "4",
    waters: "clearWaters" as const,
    transport: "Hidroavião",
    waterType: "cristalinas",
    highlight: false
  }, {
    name: "Rio Amajaú",
    price: "R$ 28.000",
    fishermen: "4",
    waters: "darkWaters" as const,
    transport: "Hidroavião",
    waterType: "negras",
    highlight: false
  }, {
    name: "Rio Xeriuní",
    price: "R$ 31.000",
    fishermen: "4",
    waters: "clearWaters" as const,
    transport: "Hidroavião",
    waterType: "cristalinas",
    highlight: false
  }, {
    name: "Rio Uneuixi",
    price: "R$ 38.000",
    fishermen: "4",
    waters: "clearWaters" as const,
    transport: "Hidroavião",
    waterType: "cristalinas",
    highlight: true
  }, {
    name: "Rio Marmelos",
    price: "R$ 31.000",
    fishermen: "4",
    waters: "darkWaters" as const,
    transport: "Hidroavião",
    waterType: "negras",
    highlight: false
  }, {
    name: "Rio Caeteté",
    price: "R$ 35.000",
    fishermen: "4",
    waters: "clearWaters" as const,
    transport: "Hidroavião",
    waterType: "cristalinas",
    highlight: true
  }, {
    name: "Rio Matupirí",
    price: "R$ 28.000",
    fishermen: "4",
    waters: "darkWaters" as const,
    transport: "Hidroavião",
    waterType: "negras",
    highlight: false
  }, {
    name: "Rio Jatapú",
    price: "R$ 35.000",
    fishermen: "4",
    waters: "clearWaters" as const,
    transport: "Hidroavião",
    waterType: "cristalinas",
    highlight: true
  }, {
    name: "Rio Igapó-Açú",
    price: "R$ 28.000",
    fishermen: "4",
    waters: "darkWaters" as const,
    transport: "Hidroavião",
    waterType: "negras",
    highlight: false
  }, {
    name: "Baixo Itapará",
    price: "R$ 23.000",
    fishermen: "4",
    waters: "darkWaters" as const,
    transport: "Hidroavião",
    waterType: "negras",
    highlight: false
  }];
  const getWaterBadgeStyle = (waterType: string) => {
    switch (waterType) {
      case "cristalinas":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "negras":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "turvas":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-accent/20 text-accent border-accent/30";
    }
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Cover */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${presentationCover})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <Badge className="mb-6 bg-accent/90 text-accent-foreground px-6 py-2 text-sm">
            {t.presentation.hero.badge}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            RIVER PLATE
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-accent mb-6 drop-shadow-2xl">
            ANGLERS
          </h2>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
            {t.presentation.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Section 2: Amazônia Intocada */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent/20 text-accent">{t.presentation.amazonia.badge}</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {t.presentation.amazonia.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.presentation.amazonia.description1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.presentation.amazonia.description2} <span className="text-accent font-semibold">{t.presentation.amazonia.highlight1}</span> {t.presentation.amazonia.description3}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.presentation.amazonia.description4}
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <img src={presentationAmazonia} alt={t.presentation.amazonia.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Dry-Zone Map */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t.presentation.dryZone.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.presentation.dryZone.description1} <span className="text-accent font-semibold">{t.presentation.dryZone.highlight1}</span> {t.presentation.dryZone.description2}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
              {t.presentation.dryZone.description3} <span className="text-accent font-semibold">{t.presentation.dryZone.highlight2}</span>.
            </p>
          </div>

          <div className="mb-16 animate-fade-in flex justify-center">
            <img src={presentationMap} alt="Dry Zone Map" className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto rounded-xl shadow-xl object-contain" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-card border-accent/20">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{t.presentation.dryZone.card1Title}</h3>
              <p className="text-muted-foreground">
                {t.presentation.dryZone.card1Description}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-card border-accent/20">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{t.presentation.dryZone.card2Title}</h3>
              <p className="text-muted-foreground">
                {t.presentation.dryZone.card2Description}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-card border-accent/20">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{t.presentation.dryZone.card3Title}</h3>
              <p className="text-muted-foreground">
                {t.presentation.dryZone.card3Description}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Nossos Diferenciais */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in">
            {t.presentation.differentials.title}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Cards Column */}
            <div className="space-y-6 animate-fade-in">
              <Card className="p-6 bg-card border-accent/20 hover:border-accent transition-colors">
                <div className="flex gap-4">
                  <div className="text-accent text-3xl font-bold">{t.presentation.differentials.card1Number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {t.presentation.differentials.card1Title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-accent font-semibold">{t.presentation.differentials.card1Highlight}</span> {t.presentation.differentials.card1Description}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-accent/20 hover:border-accent transition-colors">
                <div className="flex gap-4">
                  <div className="text-accent text-3xl font-bold">{t.presentation.differentials.card2Number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {t.presentation.differentials.card2Title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-accent font-semibold">{t.presentation.differentials.card2Highlight}</span>{t.presentation.differentials.card2Description}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-accent/20 hover:border-accent transition-colors">
                <div className="flex gap-4">
                  <div className="text-accent text-3xl font-bold">{t.presentation.differentials.card3Number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {t.presentation.differentials.card3Title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-accent font-semibold">{t.presentation.differentials.card3Highlight}</span>{t.presentation.differentials.card3Description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Image Column */}
            <div className="animate-fade-in">
              <img src={heroCabanasFlutuantes} alt={t.presentation.cabins.title} className="w-full h-auto rounded-2xl shadow-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Uma Luta Como Nenhuma Outra */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="animate-fade-in order-2 lg:order-1">
              <Badge className="mb-6 bg-accent/90 text-accent-foreground">{t.presentation.fight.badge}</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.presentation.fight.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.presentation.fight.description} <span className="text-accent font-semibold">{t.presentation.fight.highlight}</span> {t.presentation.fight.description2}
              </p>

              <div className="space-y-6">
                <Card className="p-5 bg-card border-accent/20">
                  <h3 className="text-xl font-bold text-accent mb-2">{t.presentation.fight.card1Title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t.presentation.fight.card1Description}
                  </p>
                </Card>

                <Card className="p-5 bg-card border-accent/20">
                  <h3 className="text-xl font-bold text-accent mb-2">{t.presentation.fight.card2Title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t.presentation.fight.card2Description} <span className="text-accent font-semibold">{t.presentation.fight.card2Highlight}</span> {t.presentation.fight.card2Description2}
                  </p>
                </Card>

                <Card className="p-5 bg-card border-accent/20">
                  <h3 className="text-xl font-bold text-accent mb-2">{t.presentation.fight.card3Title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t.presentation.fight.card3Description}
                  </p>
                </Card>
              </div>
            </div>

            {/* Image Column */}
            <div className="animate-fade-in order-1 lg:order-2">
              <img src={tucunarePesca} alt={t.presentation.fight.highlight} className="w-full h-auto rounded-2xl shadow-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Cabanas Flutuantes */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.presentation.cabins.title}
            </h2>
            <p className="text-xl text-accent font-medium">
              {t.presentation.cabins.subtitle}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1 animate-fade-in">
              {/* Descriptive Text */}
              <div className="mb-10">
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  {t.presentation.cabins.description1} <span className="text-accent font-semibold">{t.presentation.cabins.highlight1}</span> {t.presentation.cabins.description2} <span className="text-accent font-semibold">{t.presentation.cabins.highlight2}</span> {t.presentation.cabins.description3} <span className="text-accent font-semibold">{t.presentation.cabins.highlight3}</span> {t.presentation.cabins.description4}
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t.presentation.cabins.description5} <span className="text-accent font-semibold">{t.presentation.cabins.highlight4}</span> {t.presentation.cabins.description6}
                </p>
              </div>

              {/* Services List */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Home className="w-6 h-6 text-accent" />
                  {t.presentation.cabins.servicesTitle}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Home className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{t.presentation.cabins.service1}</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Thermometer className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{t.presentation.cabins.service2}</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Sun className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{t.presentation.cabins.service3}</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Droplets className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{t.presentation.cabins.service4}</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Bed className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{t.presentation.cabins.service5}</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Archive className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{t.presentation.cabins.service6}</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Laptop className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{t.presentation.cabins.service7}</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Satellite className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{t.presentation.cabins.service8}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Image Gallery */}
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="grid grid-cols-1 gap-4">
                {/* Main Image - External Cabin View */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                  <img src={presentationCabanas} alt={t.presentation.cabins.title} className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Two Column Grid for smaller images */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Internal Room */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={cabanaInterior} alt={t.presentation.cabins.service5} className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Cabin Convoy */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img src={cabanasComboio} alt={t.presentation.cabins.title} className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Pescaria de Classe Mundial */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in">
            {t.presentation.fishing.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="animate-fade-in">
              <Card className="p-8 h-full border-accent/20">
                <Ship className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">{t.presentation.fishing.boatsTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.presentation.fishing.boatsDescription}
                </p>
              </Card>
            </div>

            <div className="animate-fade-in">
              <Card className="p-8 h-full border-accent/20">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">{t.presentation.fishing.guidesTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.presentation.fishing.guidesDescription}
                </p>
              </Card>
            </div>
          </div>

          <div className="animate-fade-in">
            <img src={presentationBarcos} alt={t.presentation.fishing.boatsTitle} className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Sections 9-10: Pacotes Premium */}
      

      {/* Section 11: Informações */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in">
            {t.presentation.packageInfo.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-accent/20 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                {t.presentation.packageInfo.includedTitle}
              </h3>
              <ul className="space-y-3">
                {t.presentation.packageInfo.included.map((item, index) => <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>)}
              </ul>
            </Card>

            <Card className="p-8 border-accent/20 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <X className="w-6 h-6 text-destructive" />
                {t.presentation.packageInfo.notIncludedTitle}
              </h3>
              <ul className="space-y-3">
                {t.presentation.packageInfo.notIncluded.map((item, index) => <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>)}
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
              {t.presentation.planning.title}
            </h2>
            <p className="text-xl text-muted-foreground">{t.presentation.planning.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 border-accent/20 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t.presentation.planning.step1Title}</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">{t.presentation.planning.step1Day}</span> {t.presentation.planning.step1Description}
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t.presentation.planning.step2Title}</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">{t.presentation.planning.step2Day}</span> {t.presentation.planning.step2Description}
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t.presentation.planning.step3Title}</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">{t.presentation.planning.step3Day}</span> {t.presentation.planning.step3Description}
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t.presentation.planning.step4Title}</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">{t.presentation.planning.step4Day}</span> {t.presentation.planning.step4Description}
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
              {t.presentation.contact.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              {t.presentation.contact.title}
            </h2>

            <p className="text-lg text-muted-foreground mb-12">
              {t.presentation.contact.description}
            </p>

            <Card className="p-8 md:p-12 border-accent/20 mb-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg">
                  <a href="https://wa.me/5597984058184" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-2">
                    📱 WhatsApp: +55 97 98405-8184
                  </a>
                  <span className="hidden md:inline text-muted-foreground">|</span>
                  <a href="tel:18002314975" className="text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-2">
                    ☎️ Tel: 1-800-231-4975
                  </a>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg">
                  <a href="mailto:robson@riverplateoutfitters.com" className="text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-2">
                    ✉️ robson@riverplateoutfitters.com
                  </a>
                  <span className="hidden md:inline text-muted-foreground">|</span>
                  <a href="https://www.riverplateanglers.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-2">
                    🌐 riverplateanglers.com
                  </a>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" asChild>
                <a href="https://wa.me/5597984058184" target="_blank" rel="noopener noreferrer">
                  {t.presentation.contact.whatsapp}
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 font-semibold px-8" asChild>
                <a href="mailto:robson@riverplateoutfitters.com">
                  {t.presentation.contact.email}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Apresentacao;