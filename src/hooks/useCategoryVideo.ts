import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MediaCategory } from "./useMedia";

export const useCategoryVideo = (category: MediaCategory) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const { data, error } = await supabase
          .from('media')
          .select('file_url')
          .eq('category', category)
          .eq('media_type', 'video')
          .eq('is_active', true)
          .order('display_order', { ascending: true })
          .limit(1)
          .maybeSingle();

        if (error) {
          console.error(`Error fetching ${category} video:`, error);
          setLoading(false);
          return;
        }

        if (data) {
          setVideoUrl(data.file_url);
        }
      } catch (error) {
        console.error(`Error in useCategoryVideo (${category}):`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [category]);

  return { videoUrl, loading };
};
