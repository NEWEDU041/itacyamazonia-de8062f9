import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useAdminRole } from "@/hooks/useAdminRole";
import { useMedia, MediaCategory } from "@/hooks/useMedia";
import { useAutoImportMedia } from "@/hooks/useAutoImportMedia";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MediaUploadDialog } from "@/components/admin/MediaUploadDialog";
import { MediaGrid } from "@/components/admin/MediaGrid";
import { cn } from "@/lib/utils";
import { 
  Fish, 
  Loader2, 
  ArrowLeft, 
  Plus,
  Home,
  Bed,
  UtensilsCrossed,
  Anchor,
  Images,
  Presentation,
  MoreHorizontal
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const categories: { value: MediaCategory; label: string; icon: React.ElementType; color: string }[] = [
  { value: 'hero', label: 'Hero', icon: Home, color: 'from-amber-500/20 to-amber-600/10 border-amber-500/30' },
  { value: 'accommodations', label: 'Acomodações', icon: Bed, color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30' },
  { value: 'gastronomy', label: 'Gastronomia', icon: UtensilsCrossed, color: 'from-orange-500/20 to-orange-600/10 border-orange-500/30' },
  { value: 'fishing', label: 'Pesca', icon: Anchor, color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30' },
  { value: 'gallery', label: 'Galeria', icon: Images, color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30' },
  { value: 'presentation', label: 'Apresentação', icon: Presentation, color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30' },
  { value: 'other', label: 'Outros', icon: MoreHorizontal, color: 'from-gray-500/20 to-gray-600/10 border-gray-500/30' },
];

const AdminMedia = () => {
  const navigate = useNavigate();
  const { loading: authLoading, isAuthenticated } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdminRole();
  const { media, loading: mediaLoading, fetchMedia, uploadMedia, updateMedia, deleteMedia } = useMedia();
  const { importing, progress, hasImported, checkAndImport } = useAutoImportMedia();
  
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<MediaCategory | null>(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate("/auth");
    }
  }, [authLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (!adminLoading && !isAdmin && !authLoading) {
      toast({
        title: "Acesso negado",
        description: "Você não tem permissão para acessar esta página.",
        variant: "destructive",
      });
      navigate("/admin");
    }
  }, [adminLoading, isAdmin, authLoading, navigate]);

  // Auto-import static photos on first access
  useEffect(() => {
    if (isAdmin && !hasImported) {
      checkAndImport();
    }
  }, [isAdmin, hasImported, checkAndImport]);

  // Fetch media when category changes
  useEffect(() => {
    if (isAdmin && hasImported && activeCategory) {
      fetchMedia(activeCategory);
    }
  }, [isAdmin, activeCategory, hasImported, fetchMedia]);

  if (authLoading || adminLoading || importing) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
        {importing && (
          <div className="w-64 space-y-2">
            <p className="text-sm text-center text-muted-foreground">
              Importando fotos do site...
            </p>
            <Progress value={progress} />
            <p className="text-xs text-center text-muted-foreground">
              {Math.round(progress)}%
            </p>
          </div>
        )}
      </div>
    );
  }

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  // Show category selection grid
  if (!activeCategory) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/admin")}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-3">
                <Fish className="w-8 h-8 text-accent" />
                <div>
                  <h1 className="font-serif text-xl font-bold">Galeria de Mídia</h1>
                  <p className="text-sm text-muted-foreground">Selecione uma categoria</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Category Grid */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "group relative overflow-hidden rounded-xl border-2 p-6 transition-all duration-300",
                  "bg-gradient-to-br hover:scale-[1.02] hover:shadow-lg",
                  "flex flex-col items-center justify-center gap-3 text-center",
                  "min-h-[140px] md:min-h-[160px]",
                  cat.color
                )}
              >
                <cat.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground/80 group-hover:text-foreground transition-colors" />
                <span className="font-medium text-sm md:text-base text-foreground/90 group-hover:text-foreground">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // Show media for selected category
  const currentCategory = categories.find(c => c.value === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveCategory(null)}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              {currentCategory && <currentCategory.icon className="w-8 h-8 text-accent" />}
              <div>
                <h1 className="font-serif text-xl font-bold">{currentCategory?.label}</h1>
                <p className="text-sm text-muted-foreground">
                  {media.length} {media.length === 1 ? 'item' : 'itens'}
                </p>
              </div>
            </div>
          </div>
          <Button
            onClick={() => setUploadDialogOpen(true)}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Enviar Mídia
          </Button>
        </div>
      </header>

      {/* Quick Category Switcher */}
      <div className="border-b border-border bg-card/50 overflow-x-auto">
        <div className="container mx-auto px-4 py-2 flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all",
                activeCategory === cat.value
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {mediaLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        ) : (
          <MediaGrid
            media={media}
            onUpdate={updateMedia}
            onDelete={deleteMedia}
            loading={mediaLoading}
          />
        )}
      </main>

      {/* Upload Dialog */}
      <MediaUploadDialog
        open={uploadDialogOpen}
        onOpenChange={setUploadDialogOpen}
        onUpload={uploadMedia}
        loading={mediaLoading}
        defaultCategory={activeCategory}
      />
    </div>
  );
};

export default AdminMedia;
