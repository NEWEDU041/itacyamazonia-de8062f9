import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export type MediaCategory = 'hero' | 'accommodations' | 'gastronomy' | 'fishing' | 'gallery' | 'presentation' | 'other';
export type MediaType = 'image' | 'video';

export interface MediaItem {
  id: string;
  title: string | null;
  description: string | null;
  category: MediaCategory;
  media_type: MediaType;
  file_path: string;
  file_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useMedia = () => {
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState<MediaItem[]>([]);

  const fetchMedia = useCallback(async (category?: MediaCategory) => {
    setLoading(true);
    try {
      let query = supabase
        .from('media')
        .select('*')
        .order('display_order', { ascending: true });

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) throw error;
      setMedia(data as MediaItem[]);
    } catch (error: any) {
      toast({
        title: "Erro ao carregar mídia",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadMedia = useCallback(async (
    file: File,
    category: MediaCategory,
    title?: string,
    description?: string
  ) => {
    setLoading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${category}/${Date.now()}.${fileExt}`;
      
      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from('media')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('media')
        .getPublicUrl(fileName);

      const mediaType: MediaType = file.type.startsWith('video/') ? 'video' : 'image';

      // Insert into media table
      const { error: insertError } = await supabase
        .from('media')
        .insert({
          title,
          description,
          category,
          media_type: mediaType,
          file_path: fileName,
          file_url: urlData.publicUrl,
        });

      if (insertError) throw insertError;

      toast({
        title: "Mídia enviada",
        description: "O arquivo foi enviado com sucesso.",
      });

      await fetchMedia(category);
    } catch (error: any) {
      toast({
        title: "Erro ao enviar mídia",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [fetchMedia]);

  const updateMedia = useCallback(async (
    id: string,
    updates: Partial<Pick<MediaItem, 'title' | 'description' | 'display_order' | 'is_active'>>
  ) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('media')
        .update(updates)
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Mídia atualizada",
        description: "As alterações foram salvas.",
      });

      setMedia(prev => prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      ));
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteMedia = useCallback(async (id: string, filePath: string) => {
    setLoading(true);
    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('media')
        .remove([filePath]);

      if (storageError) throw storageError;

      // Delete from table
      const { error: deleteError } = await supabase
        .from('media')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;

      toast({
        title: "Mídia excluída",
        description: "O arquivo foi removido.",
      });

      setMedia(prev => prev.filter(item => item.id !== id));
    } catch (error: any) {
      toast({
        title: "Erro ao excluir",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    media,
    loading,
    fetchMedia,
    uploadMedia,
    updateMedia,
    deleteMedia,
  };
};
