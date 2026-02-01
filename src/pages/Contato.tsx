import Navigation from "@/components/Navigation";
import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";

const Contato = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2 mx-auto block w-fit mb-6">{t.contactPage.hero.badge}</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground text-center mb-6">{t.contactPage.hero.title}</h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">{t.contactPage.hero.subtitle}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <a 
              href="mailto:robson@riverplateoutfitters.com"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm sm:text-base font-medium">robson@riverplateoutfitters.com</span>
            </a>
            
            <a 
              href="https://wa.me/5565999036367"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm sm:text-base font-medium">+55 65 99903-6367</span>
            </a>
            
            <a 
              href="https://www.instagram.com/itaicyamazonia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Instagram className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm sm:text-base font-medium">@itaicyamazonia</span>
            </a>
          </div>
          
          
          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="https://wa.me/5565999036367" target="_blank" rel="noopener noreferrer">
                {t.contact.bookNow}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
