import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface HeroMedia {
  video_url: string | null;
  image_url: string | null;
}

export const useHeroMedia = () => {
  const [heroMedia, setHeroMedia] = useState<HeroMedia>({ video_url: null, image_url: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroMedia = async () => {
      try {
        // Fetch active hero media, prioritizing videos
        const { data, error } = await supabase
          .from('media')
          .select('file_url, media_type')
          .eq('category', 'hero')
          .eq('is_active', true)
          .order('display_order', { ascending: true });

        if (error) {
          console.error("Error fetching hero media:", error);
          setLoading(false);
          return;
        }

        if (data && data.length > 0) {
          // Find first video and first image
          const video = data.find(item => item.media_type === 'video');
          const image = data.find(item => item.media_type === 'image');

          setHeroMedia({
            video_url: video?.file_url || null,
            image_url: image?.file_url || null
          });
        }
      } catch (error) {
        console.error("Error in useHeroMedia:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroMedia();
  }, []);

  return { heroMedia, loading };
};
