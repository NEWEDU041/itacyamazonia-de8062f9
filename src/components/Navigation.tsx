import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();
  
  const menuItems = [
    { labelKey: "home", path: "/" },
    { labelKey: "presentation", path: "/apresentacao" },
    { labelKey: "packages", path: "/pacotes" },
    { labelKey: "accommodations", path: "/acomodacoes" },
    { labelKey: "gastronomy", path: "/gastronomia" },
    { labelKey: "photos", path: "/fotos" },
    { labelKey: "whatToBring", path: "/o-que-levar" },
    { labelKey: "contact", path: "#contato" }
  ];

  const languages = [
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" }
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
                  key={item.path}
                  href={item.path}
                  className="text-primary-foreground hover:text-accent transition-colors font-medium"
                >
                  {t.navigation[item.labelKey as keyof typeof t.navigation]}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-primary-foreground hover:text-accent transition-colors font-medium"
                >
                  {t.navigation[item.labelKey as keyof typeof t.navigation]}
                </Link>
              )
            ))}
          </div>

          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-accent/20 hover:bg-accent/30 border-accent text-accent-foreground font-semibold gap-2 animate-pulse hover:animate-none transition-all"
                >
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-primary border-primary/20">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as "pt" | "en" | "es")}
                    className="text-primary-foreground hover:bg-accent/20 cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Desktop CTA Button */}
            <Button 
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6"
              asChild
            >
              <a href="https://wa.me/5565999036367" target="_blank" rel="noopener noreferrer">
                {t.navigation.bookNow}
              </a>
            </Button>
          </div>

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
                      key={item.path}
                      href={item.path}
                      onClick={handleMenuClick}
                      className="text-primary-foreground hover:text-accent transition-colors font-medium text-lg"
                    >
                      {t.navigation[item.labelKey as keyof typeof t.navigation]}
                    </a>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={handleMenuClick}
                      className="text-primary-foreground hover:text-accent transition-colors font-medium text-lg"
                    >
                      {t.navigation[item.labelKey as keyof typeof t.navigation]}
                    </Link>
                  )
                ))}
                
                {/* Mobile Language Selector */}
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-primary-foreground/70 text-sm mb-2">Idioma / Language</p>
                  <div className="flex flex-col gap-2">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant={language === lang.code ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setLanguage(lang.code as "pt" | "en" | "es")}
                        className={language === lang.code ? "bg-accent hover:bg-accent/90" : "text-primary-foreground hover:bg-accent/20"}
                      >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="default"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-4"
                  asChild
                >
                  <a href="https://wa.me/5565999036367" target="_blank" rel="noopener noreferrer">
                    {t.navigation.bookNow}
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
