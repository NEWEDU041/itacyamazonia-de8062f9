import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MediaCategory, MediaType } from "./useMedia";

export interface PublicMediaItem {
  id: string;
  title: string | null;
  category: MediaCategory;
  media_type: MediaType;
  file_url: string;
  display_order: number;
}

// Mapping from database categories to Fotos page categories
const categoryMapping: Record<MediaCategory, string> = {
  hero: 'structure', // Hero images are not shown in gallery (they're for the hero section)
  landscapes: 'landscapes',
  accommodations: 'accommodations',
  gastronomy: 'gastronomy',
  fishing: 'fishing',
  gallery: 'landscapes',
  presentation: 'structure',
  other: 'structure',
};

export const usePublicMedia = () => {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState<PublicMediaItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchActiveMedia = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error: queryError } = await supabase
        .from('media')
        .select('id, title, category, media_type, file_url, display_order')
        .eq('is_active', true)
        .eq('media_type', 'image') // Only fetch images for the gallery
        .order('display_order', { ascending: true });

      if (queryError) throw queryError;
      setMedia(data as PublicMediaItem[]);
    } catch (err: any) {
      console.error("Error fetching public media:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchActiveMedia();
  }, [fetchActiveMedia]);

  // Transform media items to the format expected by the Fotos page
  const getPhotosForGallery = useCallback(() => {
    return media.map(item => ({
      src: item.file_url,
      category: categoryMapping[item.category] || 'structure',
      alt: item.title || 'Imagem',
      id: item.id,
    }));
  }, [media]);

  return {
    media,
    loading,
    error,
    refetch: fetchActiveMedia,
    getPhotosForGallery,
  };
};
