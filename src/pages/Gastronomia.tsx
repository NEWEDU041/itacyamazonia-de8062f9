import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import gastronomia1 from "@/assets/gastronomia-1.jpg";
import gastronomia2 from "@/assets/gastronomia-2.jpg";
import gastronomia3 from "@/assets/gastronomia-3.jpg";
import gastronomia4 from "@/assets/gastronomia-4.jpg";
import gastronomia5 from "@/assets/gastronomia-5.jpg";
import gastronomia6 from "@/assets/gastronomia-6.jpg";

const Gastronomia = () => {
  const pratos = [
    { image: gastronomia1, name: "Churrasco com cortes nobres" },
    { image: gastronomia2, name: "Açaí e pirarucu frito" },
    { image: gastronomia3, name: "Drinks variados" },
    { image: gastronomia4, name: "Sashimi Rústico" },
    { image: gastronomia5, name: "Dadinhos de Tapioca" },
    { image: gastronomia6, name: "Costela de Tambaqui e cama de Farinha do Uarini" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground text-center mb-6">
            Gastronomia Amazônica
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Desfrute da culinária amazônica com ingredientes exclusivos da floresta
          </p>
        </div>
      </section>

      {/* Gastronomia Content */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-6">
            Uma experiência gastronômica única
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-12">
            A amazônia sem duvidas é o paraíso para qualquer chef de cozinha, para construir um prato as possibilidades são enormes, pois há infinitas combinações de ingredientes que são encontrados apenas na floresta amazônica como Cará-roxo, Castanha do Brasil, Jambú, Açaí e Cupuaçú. Além dos peixes como Jaraqui, Pirarucu e Tambaqui. Em nossas operações de pesca, servimos pratos muito bem elaborados. Mas sem perder o toque regional.
          </p>
          
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {pratos.map((prato, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
                      <img 
                        src={prato.image} 
                        alt={prato.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h4 className="text-xl font-serif font-bold text-white">
                            {prato.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-4" />
              <CarouselNext className="right-2 sm:right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Gastronomia;
