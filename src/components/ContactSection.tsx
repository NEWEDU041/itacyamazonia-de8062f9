import { Mail, Phone, Instagram, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-12">
          {t.contact.title}
        </h2>
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
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
            asChild
          >
            <a href="https://us2.cloudbeds.com/pt-br/reservas/PAWNo0" target="_blank" rel="noopener noreferrer">
              {t.contact.bookNow}
            </a>
          </Button>
        </div>

        {/* Admin link - discrete footer */}
        <div className="flex justify-center mt-16 pt-8 border-t border-border/20">
          <Link 
            to="/auth" 
            className="text-muted-foreground/40 hover:text-muted-foreground transition-colors p-2"
            title="Área Administrativa"
          >
            <Settings className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
