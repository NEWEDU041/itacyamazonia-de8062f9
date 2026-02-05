import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Loader2, Image, Video } from "lucide-react";
import { MediaCategory } from "@/hooks/useMedia";

interface MediaUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpload: (file: File, category: MediaCategory, title?: string, description?: string) => Promise<void>;
  loading: boolean;
  defaultCategory?: MediaCategory;
}

const categoryLabels: Record<MediaCategory, string> = {
  hero: "Hero / Banner",
  landscapes: "Paisagens",
  accommodations: "Acomodações",
  gastronomy: "Gastronomia",
  fishing: "Pesca",
  gallery: "Galeria Geral",
  presentation: "Apresentação",
  other: "Primeira Página",
};

export const MediaUploadDialog = ({
  open,
  onOpenChange,
  onUpload,
  loading,
  defaultCategory = "gallery",
}: MediaUploadDialogProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<MediaCategory>(defaultCategory);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;
    
    await onUpload(file, category, title || undefined, description || undefined);
    
    // Reset form
    setFile(null);
    setPreview(null);
    setTitle("");
    setDescription("");
    onOpenChange(false);
  };

  const isVideo = file?.type.startsWith('video/');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enviar Mídia</DialogTitle>
          <DialogDescription>
            Faça upload de uma imagem ou vídeo para o site.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* File Upload Area */}
          <div
            className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-accent transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            {preview ? (
              <div className="relative">
                {isVideo ? (
                  <video 
                    src={preview} 
                    className="max-h-48 mx-auto rounded-lg"
                    controls
                  />
                ) : (
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="max-h-48 mx-auto rounded-lg object-cover"
                  />
                )}
                <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  {isVideo ? <Video className="w-4 h-4" /> : <Image className="w-4 h-4" />}
                  {file?.name}
                </div>
              </div>
            ) : (
              <div className="py-4">
                <Upload className="w-10 h-10 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  Clique para selecionar ou arraste um arquivo
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  JPG, PNG, WebP, MP4 (max 50MB)
                </p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <Select value={category} onValueChange={(v) => setCategory(v as MediaCategory)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(categoryLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Título (opcional)</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título da mídia"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Descrição (opcional)</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição breve..."
              rows={2}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={!file || loading}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Enviando...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Enviar
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
