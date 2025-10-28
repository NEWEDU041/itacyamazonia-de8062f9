import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-12">
          Entre em Contato
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
            <a href="https://wa.me/5565999036367" target="_blank" rel="noopener noreferrer">
              Reserve Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
