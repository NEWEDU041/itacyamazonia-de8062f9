import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useAdminRole } from "@/hooks/useAdminRole";
import { useMedia, MediaCategory } from "@/hooks/useMedia";
import { useAutoImportMedia } from "@/hooks/useAutoImportMedia";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { MediaUploadDialog } from "@/components/admin/MediaUploadDialog";
import { MediaGrid } from "@/components/admin/MediaGrid";
import { 
  Fish, 
  Loader2, 
  ArrowLeft, 
  Plus,
  Home,
  UtensilsCrossed,
  Anchor,
  Images,
  Presentation,
  MoreHorizontal
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const categories: { value: MediaCategory; label: string; icon: React.ElementType }[] = [
  { value: 'hero', label: 'Hero', icon: Home },
  { value: 'accommodations', label: 'Acomodações', icon: Home },
  { value: 'gastronomy', label: 'Gastronomia', icon: UtensilsCrossed },
  { value: 'fishing', label: 'Pesca', icon: Anchor },
  { value: 'gallery', label: 'Galeria', icon: Images },
  { value: 'presentation', label: 'Apresentação', icon: Presentation },
  { value: 'other', label: 'Outros', icon: MoreHorizontal },
];

const AdminMedia = () => {
  const navigate = useNavigate();
  const { loading: authLoading, isAuthenticated } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdminRole();
  const { media, loading: mediaLoading, fetchMedia, uploadMedia, updateMedia, deleteMedia } = useMedia();
  const { importing, progress, hasImported, checkAndImport } = useAutoImportMedia();
  
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<MediaCategory>('hero');

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

  // Fetch media when category changes or after import completes
  useEffect(() => {
    if (isAdmin && hasImported) {
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
                <p className="text-sm text-muted-foreground">Gerencie fotos e vídeos</p>
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">

        {/* Media Tabs */}
        <Tabs 
          value={activeCategory} 
          onValueChange={(v) => setActiveCategory(v as MediaCategory)}
          className="w-full"
        >
          <TabsList className="w-full justify-start overflow-x-auto flex-nowrap mb-6">
            {categories.map((cat) => (
              <TabsTrigger 
                key={cat.value} 
                value={cat.value}
                className="flex items-center gap-2"
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
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
            </TabsContent>
          ))}
        </Tabs>
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
