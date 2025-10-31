import { useState } from "react";
import Navigation from "@/components/Navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { Badge } from "@/components/ui/badge";

// Importando as imagens existentes
import cabanaInterior from "@/assets/cabana-interior.png";
import acomodacoes1 from "@/assets/acomodacoes-1.jpg";
import acomodacoes2 from "@/assets/acomodacoes-2.jpg";
import acomodacoes3 from "@/assets/acomodacoes-3.jpg";
import acomodacoes4 from "@/assets/acomodacoes-4.jpg";
import gastronomia1 from "@/assets/gastronomia-1.jpg";
import gastronomia2 from "@/assets/gastronomia-2.jpg";
import gastronomia3 from "@/assets/gastronomia-3.jpg";
import gastronomia4 from "@/assets/gastronomia-4.jpg";
import gastronomia5 from "@/assets/gastronomia-5.jpg";
import gastronomia6 from "@/assets/gastronomia-6.jpg";
import jantarPraia from "@/assets/jantar-praia.png";
import salaJantar from "@/assets/sala-jantar.png";
import tremDoRio from "@/assets/trem-do-rio.png";
import heroAereo from "@/assets/hero-aereo-cabanas.png";
import heroAereoRio from "@/assets/hero-aereo-rio.jpg";
import heroAmazon from "@/assets/hero-amazon.jpg";
import heroCabanasNoite from "@/assets/hero-cabanas-noite.jpg";
import heroPaisagem from "@/assets/hero-paisagem.jpg";
import heroPraiaCabanas from "@/assets/hero-praia-cabanas.png";
import heroRioCurva from "@/assets/hero-rio-curva.png";
import heroCabanasFlutuantes from "@/assets/hero-cabanas-flutuantes.png";
const Fotos = () => {
  const {
    t
  } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const photos = [
  // Acomodações
  {
    src: cabanaInterior,
    category: "accommodations",
    alt: "Interior da cabana"
  }, {
    src: acomodacoes1,
    category: "accommodations",
    alt: "Acomodação 1"
  }, {
    src: acomodacoes2,
    category: "accommodations",
    alt: "Acomodação 2"
  }, {
    src: acomodacoes3,
    category: "accommodations",
    alt: "Acomodação 3"
  }, {
    src: acomodacoes4,
    category: "accommodations",
    alt: "Acomodação 4"
  }, {
    src: heroCabanasFlutuantes,
    category: "accommodations",
    alt: "Cabanas flutuantes"
  },
  // Gastronomia
  {
    src: gastronomia1,
    category: "gastronomy",
    alt: "Gastronomia 1"
  }, {
    src: gastronomia2,
    category: "gastronomy",
    alt: "Gastronomia 2"
  }, {
    src: gastronomia3,
    category: "gastronomy",
    alt: "Gastronomia 3"
  }, {
    src: gastronomia4,
    category: "gastronomy",
    alt: "Gastronomia 4"
  }, {
    src: gastronomia5,
    category: "gastronomy",
    alt: "Gastronomia 5"
  }, {
    src: gastronomia6,
    category: "gastronomy",
    alt: "Gastronomia 6"
  }, {
    src: jantarPraia,
    category: "gastronomy",
    alt: "Jantar na praia"
  }, {
    src: salaJantar,
    category: "gastronomy",
    alt: "Sala de jantar"
  },
  // Pesca
  {
    src: heroAereoRio,
    category: "fishing",
    alt: "Rio para pesca"
  }, {
    src: heroRioCurva,
    category: "fishing",
    alt: "Área de pesca"
  }, {
    src: heroPaisagem,
    category: "fishing",
    alt: "Paisagem para pesca"
  },
  // Estrutura
  {
    src: tremDoRio,
    category: "structure",
    alt: "Trem do Rio"
  },
  // Paisagens
  {
    src: heroAereo,
    category: "landscapes",
    alt: "Vista aérea das cabanas"
  }, {
    src: heroAereoRio,
    category: "landscapes",
    alt: "Vista aérea do rio"
  }, {
    src: heroAmazon,
    category: "landscapes",
    alt: "Amazônia"
  }, {
    src: heroCabanasNoite,
    category: "landscapes",
    alt: "Cabanas à noite"
  }, {
    src: heroPaisagem,
    category: "landscapes",
    alt: "Paisagem amazônica"
  }, {
    src: heroPraiaCabanas,
    category: "landscapes",
    alt: "Praia com cabanas"
  }, {
    src: heroRioCurva,
    category: "landscapes",
    alt: "Curva do rio"
  }];
  const filteredPhotos = selectedCategory === "all" ? photos : photos.filter(photo => photo.category === selectedCategory);
  const categories = [{
    key: "all",
    label: t.photos.categories.all
  }, {
    key: "accommodations",
    label: t.photos.categories.accommodations
  }, {
    key: "gastronomy",
    label: t.photos.categories.gastronomy
  }, {
    key: "fishing",
    label: t.photos.categories.fishing
  }, {
    key: "structure",
    label: t.photos.categories.structure
  }, {
    key: "landscapes",
    label: t.photos.categories.landscapes
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroAmazon})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4 bg-accent/90 text-accent-foreground hover:bg-accent">
            {t.photos.hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            {t.photos.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {t.photos.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/30 sticky top-[72px] z-40 backdrop-blur-sm border-b border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => <button key={category.key} onClick={() => setSelectedCategory(category.key)} className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.key ? "bg-accent text-accent-foreground shadow-lg scale-105" : "bg-card/60 text-foreground hover:bg-card/80 hover:scale-105"}`}>
                {category.label}
              </button>)}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in bg-card" style={{
            animationDelay: `${index * 0.05}s`
          }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                
              </div>)}
          </div>

          {filteredPhotos.length === 0 && <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhuma foto encontrada nesta categoria.
              </p>
            </div>}
        </div>
      </section>
    </div>;
};
export default Fotos;