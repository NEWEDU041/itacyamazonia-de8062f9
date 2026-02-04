import { useState, useCallback } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { Image as ImageIcon, Loader2 } from "lucide-react";
import { MediaItem } from "@/hooks/useMedia";
import { SortableMediaItem } from "./SortableMediaItem";
import { cn } from "@/lib/utils";

interface MediaGridProps {
  media: MediaItem[];
  onUpdate: (id: string, updates: Partial<Pick<MediaItem, 'title' | 'description' | 'display_order' | 'is_active'>>) => Promise<void>;
  onDelete: (id: string, filePath: string) => Promise<void>;
  loading: boolean;
  onReorder?: (reorderedMedia: MediaItem[]) => Promise<void>;
}

export const MediaGrid = ({ media, onUpdate, onDelete, loading, onReorder }: MediaGridProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [items, setItems] = useState<MediaItem[]>(media);
  const [isReordering, setIsReordering] = useState(false);

  // Update items when media prop changes
  if (JSON.stringify(media.map(m => m.id)) !== JSON.stringify(items.map(i => i.id))) {
    setItems(media);
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback(async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);

      const newItems = arrayMove(items, oldIndex, newIndex);
      setItems(newItems);

      // Update display_order for all items
      if (onReorder) {
        setIsReordering(true);
        try {
          await onReorder(newItems);
        } finally {
          setIsReordering(false);
        }
      } else {
        // Fallback: update each item individually
        setIsReordering(true);
        try {
          for (let i = 0; i < newItems.length; i++) {
            if (newItems[i].display_order !== i) {
              await onUpdate(newItems[i].id, { display_order: i });
            }
          }
        } finally {
          setIsReordering(false);
        }
      }
    }
  }, [items, onReorder, onUpdate]);

  const handleStartEdit = (item: MediaItem) => {
    setEditingId(item.id);
    setEditTitle(item.title || "");
    setEditDescription(item.description || "");
  };

  const handleSaveEdit = async (id: string) => {
    await onUpdate(id, { title: editTitle || null, description: editDescription || null });
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  if (media.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
          <ImageIcon className="w-10 h-10 text-muted-foreground/50" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-1">Nenhuma mídia</h3>
        <p className="text-sm text-muted-foreground text-center max-w-sm">
          Esta categoria está vazia. Clique em "Enviar Mídia" para adicionar fotos ou vídeos.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header info */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>Arraste as mídias para reorganizar a ordem de exibição</p>
        {isReordering && (
          <div className="flex items-center gap-2 text-accent">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Salvando ordem...</span>
          </div>
        )}
      </div>

      {/* Grid */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items.map(i => i.id)} strategy={rectSortingStrategy}>
          <div className={cn(
            "grid gap-4",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}>
            {items.map((item, index) => (
              <SortableMediaItem
                key={item.id}
                item={item}
                index={index}
                isEditing={editingId === item.id}
                editTitle={editTitle}
                editDescription={editDescription}
                onStartEdit={handleStartEdit}
                onSaveEdit={handleSaveEdit}
                onCancelEdit={handleCancelEdit}
                onEditTitleChange={setEditTitle}
                onEditDescriptionChange={setEditDescription}
                onUpdate={onUpdate}
                onDelete={onDelete}
                loading={loading}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};
