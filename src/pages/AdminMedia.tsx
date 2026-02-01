import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useAdminRole } from "@/hooks/useAdminRole";
import { useMedia, MediaCategory } from "@/hooks/useMedia";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MediaUploadDialog } from "@/components/admin/MediaUploadDialog";
import { MediaGrid } from "@/components/admin/MediaGrid";
import { StaticPhotosImporter } from "@/components/admin/StaticPhotosImporter";
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
  MoreHorizontal,
  Download
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
  
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<MediaCategory>('gallery');
  const [showImporter, setShowImporter] = useState(false);

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

  useEffect(() => {
    if (isAdmin) {
      fetchMedia(activeCategory);
    }
  }, [isAdmin, activeCategory, fetchMedia]);

  if (authLoading || adminLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
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
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowImporter(!showImporter)}
            >
              <Download className="w-4 h-4 mr-2" />
              {showImporter ? "Ocultar Importador" : "Importar do Site"}
            </Button>
            <Button
              onClick={() => setUploadDialogOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Enviar Mídia
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Static Photos Importer */}
        {showImporter && (
          <StaticPhotosImporter 
            onImportComplete={() => {
              fetchMedia(activeCategory);
              setShowImporter(false);
            }} 
          />
        )}

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
