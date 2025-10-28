import { Button } from "@/components/ui/button";

const Navigation = () => {
  const menuItems = [
    "Home",
    "Pacotes",
    "Acomodações",
    "Gastronomia",
    "O Que Levar",
    "Relatórios",
    "Contato"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-xl">IA</span>
            </div>
            <span className="text-primary-foreground font-serif text-xl font-bold">
              Itaicy Amazônia
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            variant="default"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6"
          >
            Reserve Agora
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
