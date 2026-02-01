import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { 
  Fish, 
  Loader2, 
  LogOut, 
  Image, 
  FileText, 
  Settings,
  Users,
  Home
} from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const { user, loading, signOut, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/auth");
    }
  }, [loading, isAuthenticated, navigate]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Erro ao sair",
        description: "Não foi possível fazer logout.",
        variant: "destructive",
      });
      return;
    }
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const adminModules = [
    {
      title: "Galeria de Fotos",
      description: "Gerencie as fotos exibidas no site",
      icon: Image,
      href: "/admin/photos",
      available: true,
    },
    {
      title: "Pacotes",
      description: "Configure os pacotes e preços",
      icon: FileText,
      href: "/admin/packages",
      available: true,
    },
    {
      title: "Usuários",
      description: "Gerencie administradores",
      icon: Users,
      href: "/admin/users",
      available: false,
    },
    {
      title: "Configurações",
      description: "Configurações gerais do site",
      icon: Settings,
      href: "/admin/settings",
      available: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Fish className="w-8 h-8 text-accent" />
            <div>
              <h1 className="font-serif text-xl font-bold">River Plate Anglers</h1>
              <p className="text-sm text-muted-foreground">Painel Administrativo</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.email}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/")}
            >
              <Home className="w-4 h-4 mr-2" />
              Ver Site
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-destructive hover:text-destructive"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold mb-2">Bem-vindo ao Painel</h2>
          <p className="text-muted-foreground">
            Gerencie o conteúdo do seu site a partir daqui.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardHeader className="pb-2">
              <CardDescription>Total de Fotos</CardDescription>
              <CardTitle className="text-3xl">28</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Pacotes Ativos</CardDescription>
              <CardTitle className="text-3xl">8</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Admin Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {adminModules.map((module) => (
            <Card 
              key={module.title}
              className={`transition-all duration-200 ${
                module.available 
                  ? "hover:shadow-lg hover:border-accent cursor-pointer" 
                  : "opacity-60 cursor-not-allowed"
              }`}
              onClick={() => module.available && navigate(module.href)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <module.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              {!module.available && (
                <CardContent className="pt-0">
                  <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                    Em breve
                  </span>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
          <h3 className="font-semibold mb-2">🚧 Área em Desenvolvimento</h3>
          <p className="text-sm text-muted-foreground">
            Os módulos de gerenciamento estão sendo desenvolvidos. Em breve você poderá 
            gerenciar fotos, pacotes, reservas e muito mais diretamente por aqui.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Admin;
