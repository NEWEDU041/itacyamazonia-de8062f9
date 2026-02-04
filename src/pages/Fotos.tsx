import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { usePublicMedia } from "@/hooks/usePublicMedia";
import { Badge } from "@/components/ui/badge";
import LazyImage from "@/components/LazyImage";
import { Loader2 } from "lucide-react";
import fotosHeroBg from "@/assets/fotos-hero-bg.png";

const Fotos = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { getPhotosForGallery, loading, error } = usePublicMedia();
  
  const photos = getPhotosForGallery();
  
  const filteredPhotos = useMemo(() => 
    selectedCategory === "all" ? photos : photos.filter(photo => photo.category === selectedCategory),
    [selectedCategory, photos]
  );
  
  const categories = [
    { key: "all", label: t.photos.categories.all },
    { key: "accommodations", label: t.photos.categories.accommodations },
    { key: "gastronomy", label: t.photos.categories.gastronomy },
    { key: "fishing", label: t.photos.categories.fishing },
    { key: "structure", label: t.photos.categories.structure },
    { key: "landscapes", label: t.photos.categories.landscapes },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${fotosHeroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
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
            {categories.map(category => (
              <button 
                key={category.key} 
                onClick={() => setSelectedCategory(category.key)} 
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.key 
                    ? "bg-accent text-accent-foreground shadow-lg scale-105" 
                    : "bg-card/60 text-foreground hover:bg-card/80 hover:scale-105"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-accent mb-4" />
              <p className="text-muted-foreground">Carregando fotos...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-destructive text-lg">
                Erro ao carregar fotos. Tente novamente.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, index) => (
                <div 
                  key={photo.id || index} 
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in bg-card" 
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <LazyImage 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-2 bg-accent/90 text-accent-foreground">
                        {categories.find(c => c.key === photo.category)?.label}
                      </Badge>
                      <p className="text-white text-sm font-medium">{photo.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhuma foto encontrada nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Fotos;
