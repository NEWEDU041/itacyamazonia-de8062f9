import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Pacotes", path: "#pacotes" },
    { label: "Acomodações", path: "/acomodacoes" },
    { label: "Gastronomia", path: "#gastronomia" },
    { label: "O Que Levar", path: "#o-que-levar" },
    { label: "Relatórios", path: "#relatorios" },
    { label: "Contato", path: "#contato" }
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg sm:text-xl">IA</span>
            </div>
            <span className="text-primary-foreground font-serif text-base sm:text-xl font-bold">
              Itaicy Amazônia
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              item.path.startsWith("#") ? (
                <a
                  key={item.label}
                  href={item.path}
                  className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Button 
            variant="default"
            className="hidden sm:flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6"
            asChild
          >
            <a href="https://wa.me/5565999036367" target="_blank" rel="noopener noreferrer">
              Reserve Agora
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="lg:hidden text-primary-foreground"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-primary border-primary/20">
              <div className="flex flex-col gap-6 mt-8">
                {menuItems.map((item) => (
                  item.path.startsWith("#") ? (
                    <a
                      key={item.label}
                      href={item.path}
                      onClick={handleMenuClick}
                      className="text-primary-foreground hover:text-accent transition-colors duration-300 text-lg font-medium"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={handleMenuClick}
                      className="text-primary-foreground hover:text-accent transition-colors duration-300 text-lg font-medium"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <Button 
                  variant="default"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-4"
                  asChild
                >
                  <a href="https://wa.me/5565999036367" target="_blank" rel="noopener noreferrer">
                    Reserve Agora
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
