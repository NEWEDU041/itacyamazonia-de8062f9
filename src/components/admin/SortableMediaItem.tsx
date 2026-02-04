import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
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
import { Trash2, Edit2, GripVertical, Video, Image as ImageIcon, Check, X, Play } from "lucide-react";
import { MediaItem } from "@/hooks/useMedia";
import { cn } from "@/lib/utils";

interface SortableMediaItemProps {
  item: MediaItem;
  isEditing: boolean;
  editTitle: string;
  editDescription: string;
  onStartEdit: (item: MediaItem) => void;
  onSaveEdit: (id: string) => void;
  onCancelEdit: () => void;
  onEditTitleChange: (value: string) => void;
  onEditDescriptionChange: (value: string) => void;
  onUpdate: (id: string, updates: Partial<Pick<MediaItem, 'title' | 'description' | 'display_order' | 'is_active'>>) => Promise<void>;
  onDelete: (id: string, filePath: string) => Promise<void>;
  loading: boolean;
  index: number;
}

export const SortableMediaItem = ({
  item,
  isEditing,
  editTitle,
  editDescription,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onEditTitleChange,
  onEditDescriptionChange,
  onUpdate,
  onDelete,
  loading,
  index,
}: SortableMediaItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden border border-border/50 transition-all duration-200",
        isDragging && "z-50 shadow-2xl scale-105 border-accent",
        !item.is_active && "opacity-60"
      )}
    >
      {/* Order Badge */}
      <div className="absolute top-3 right-3 z-10">
        <div className="bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
          #{index + 1}
        </div>
      </div>

      {/* Media Preview */}
      <div className="aspect-[4/3] relative overflow-hidden">
        {item.media_type === 'video' ? (
          <>
            <video 
              src={item.file_url} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-5 h-5 text-white ml-1" />
              </div>
            </div>
          </>
        ) : (
          <img 
            src={item.file_url} 
            alt={item.title || 'Media'} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <div className={cn(
            "text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm",
            item.media_type === 'video' ? "bg-purple-500/80" : "bg-blue-500/80"
          )}>
            {item.media_type === 'video' ? (
              <>
                <Video className="w-3 h-3" />
                <span>Vídeo</span>
              </>
            ) : (
              <>
                <ImageIcon className="w-3 h-3" />
                <span>Imagem</span>
              </>
            )}
          </div>
        </div>

        {/* Actions overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 bg-white/90 hover:bg-white text-gray-900"
              onClick={() => onStartEdit(item)}
            >
              <Edit2 className="w-3.5 h-3.5 mr-1" />
              Editar
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="sm" variant="destructive" className="h-8">
                  <Trash2 className="w-3.5 h-3.5" />
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
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {isEditing ? (
          <div className="space-y-3">
            <Input
              value={editTitle}
              onChange={(e) => onEditTitleChange(e.target.value)}
              placeholder="Título da mídia..."
              className="h-9"
              autoFocus
            />
            <textarea
              value={editDescription}
              onChange={(e) => onEditDescriptionChange(e.target.value)}
              placeholder="Descrição (opcional)..."
              className="w-full h-16 px-3 py-2 text-sm rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="flex-1 h-8"
                onClick={() => onSaveEdit(item.id)}
                disabled={loading}
              >
                <Check className="w-3.5 h-3.5 mr-1.5" />
                Salvar
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="h-8 px-3"
                onClick={onCancelEdit}
              >
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="font-medium text-sm text-foreground truncate">
              {item.title || 'Sem título'}
            </p>
            {item.description && (
              <p className="text-xs text-muted-foreground line-clamp-2">
                {item.description}
              </p>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch
                  id={`active-${item.id}`}
                  checked={item.is_active}
                  onCheckedChange={(checked) => onUpdate(item.id, { is_active: checked })}
                  disabled={loading}
                  className="data-[state=checked]:bg-accent"
                />
                <Label 
                  htmlFor={`active-${item.id}`} 
                  className={cn(
                    "text-xs font-medium transition-colors",
                    item.is_active ? "text-accent" : "text-muted-foreground"
                  )}
                >
                  {item.is_active ? "Ativo" : "Inativo"}
                </Label>
              </div>
              <button
                {...attributes}
                {...listeners}
                className="p-1.5 rounded-md hover:bg-muted cursor-grab active:cursor-grabbing transition-colors"
                title="Arraste para reordenar"
              >
                <GripVertical className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
