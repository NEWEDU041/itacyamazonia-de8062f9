import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, Edit2, GripVertical, Video, Image, Check, X } from "lucide-react";
import { MediaItem } from "@/hooks/useMedia";

interface MediaGridProps {
  media: MediaItem[];
  onUpdate: (id: string, updates: Partial<Pick<MediaItem, 'title' | 'description' | 'display_order' | 'is_active'>>) => Promise<void>;
  onDelete: (id: string, filePath: string) => Promise<void>;
  loading: boolean;
}

export const MediaGrid = ({ media, onUpdate, onDelete, loading }: MediaGridProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const handleStartEdit = (item: MediaItem) => {
    setEditingId(item.id);
    setEditTitle(item.title || "");
  };

  const handleSaveEdit = async (id: string) => {
    await onUpdate(id, { title: editTitle || null });
    setEditingId(null);
    setEditTitle("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
  };

  if (media.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Image className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>Nenhuma mídia encontrada nesta categoria.</p>
        <p className="text-sm">Clique em "Enviar Mídia" para adicionar.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {media.map((item) => (
        <Card 
          key={item.id} 
          className={`overflow-hidden transition-opacity ${!item.is_active ? 'opacity-50' : ''}`}
        >
          <div className="aspect-square relative group">
            {item.media_type === 'video' ? (
              <video 
                src={item.file_url} 
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={item.file_url} 
                alt={item.title || 'Media'} 
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button
                size="icon"
                variant="secondary"
                onClick={() => handleStartEdit(item)}
              >
                <Edit2 className="w-4 h-4" />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="icon" variant="destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Excluir mídia?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta ação não pode ser desfeita. O arquivo será removido permanentemente.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => onDelete(item.id, item.file_path)}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Excluir
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {/* Type badge */}
            <div className="absolute top-2 left-2">
              <div className="bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                {item.media_type === 'video' ? (
                  <Video className="w-3 h-3" />
                ) : (
                  <Image className="w-3 h-3" />
                )}
              </div>
            </div>
          </div>

          <CardContent className="p-3">
            {editingId === item.id ? (
              <div className="space-y-2">
                <Input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Título..."
                  className="h-8 text-sm"
                />
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 h-7"
                    onClick={() => handleSaveEdit(item.id)}
                    disabled={loading}
                  >
                    <Check className="w-3 h-3 mr-1" />
                    Salvar
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-7"
                    onClick={handleCancelEdit}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm font-medium truncate">
                  {item.title || 'Sem título'}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <Switch
                      id={`active-${item.id}`}
                      checked={item.is_active}
                      onCheckedChange={(checked) => onUpdate(item.id, { is_active: checked })}
                      disabled={loading}
                    />
                    <Label htmlFor={`active-${item.id}`} className="text-xs text-muted-foreground">
                      Ativo
                    </Label>
                  </div>
                  <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                </div>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
