import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MediaCategory } from "./useMedia";

// Static photos from the site
import acomodacoes2 from "@/assets/acomodacoes-2.jpg";
import acomodacoes3 from "@/assets/acomodacoes-3.jpg";
import acomodacoes4 from "@/assets/acomodacoes-4.jpg";
import gastronomia1 from "@/assets/gastronomia-1.jpg";
import gastronomia2 from "@/assets/gastronomia-2.jpg";
import gastronomia3 from "@/assets/gastronomia-3.jpg";
import gastronomia4 from "@/assets/gastronomia-4.jpg";
import gastronomia5 from "@/assets/gastronomia-5.jpg";
import gastronomia6 from "@/assets/gastronomia-6.jpg";
import jantarPraia from "@/assets/jantar-praia.png";
import salaJantar from "@/assets/sala-jantar.png";
import tremDoRio from "@/assets/trem-do-rio.png";
import heroAereo from "@/assets/hero-aereo-cabanas.png";
import heroAereoRio from "@/assets/hero-aereo-rio.jpg";
import heroAmazon from "@/assets/hero-amazon.jpg";
import heroCabanasNoite from "@/assets/hero-cabanas-noite.jpg";
import heroPaisagem from "@/assets/hero-paisagem.jpg";
import heroPraiaCabanas from "@/assets/hero-praia-cabanas.png";
import heroRioCurva from "@/assets/hero-rio-curva.png";
import heroCabanasFlutuantes from "@/assets/hero-cabanas-flutuantes.png";
import pesca1 from "@/assets/pesca-1.jpg";
import pesca2 from "@/assets/pesca-2.jpg";
import pesca3 from "@/assets/pesca-3.jpg";
import pesca4 from "@/assets/pesca-4.jpg";
import pesca5 from "@/assets/pesca-5.jpg";
import pesca6 from "@/assets/pesca-6.jpg";
import pesca7 from "@/assets/pesca-7.jpg";
import pesca8 from "@/assets/pesca-8.jpg";
import pesca9 from "@/assets/pesca-9.jpg";
import pesca10 from "@/assets/pesca-10.jpg";
import pesca11 from "@/assets/pesca-11.jpg";
import pesca12 from "@/assets/pesca-12.jpg";
import pesca13 from "@/assets/pesca-13.jpg";
import pesca14 from "@/assets/pesca-14.jpg";
import pesca15 from "@/assets/pesca-15.jpg";
import pesca16 from "@/assets/pesca-16.jpg";
import pesca17 from "@/assets/pesca-17.jpg";
import pesca18 from "@/assets/pesca-18.jpg";
import pesca19 from "@/assets/pesca-19.jpg";
import pesca20 from "@/assets/pesca-20.jpg";
import presentationCover from "@/assets/presentation-cover.jpg";
import presentationAmazonia from "@/assets/presentation-amazonia.jpg";
import presentationBarcos from "@/assets/presentation-barcos.jpg";
import presentationCabanas from "@/assets/presentation-cabanas.jpg";
import presentationDiferenciais from "@/assets/presentation-diferenciais.jpg";
import presentationRestaurante from "@/assets/presentation-restaurante.jpg";
import presentationTucunare from "@/assets/presentation-tucunare.jpg";

interface StaticPhoto {
  id: string;
  src: string;
  title: string;
  category: MediaCategory;
}

const staticPhotos: StaticPhoto[] = [
  // Acomodações
  { id: "acomodacoes-2", src: acomodacoes2, title: "Acomodação 2", category: "accommodations" },
  { id: "acomodacoes-3", src: acomodacoes3, title: "Acomodação 3", category: "accommodations" },
  { id: "acomodacoes-4", src: acomodacoes4, title: "Acomodação 4", category: "accommodations" },
  { id: "cabanas-flutuantes", src: heroCabanasFlutuantes, title: "Cabanas Flutuantes", category: "accommodations" },
  
  // Gastronomia
  { id: "gastronomia-1", src: gastronomia1, title: "Gastronomia 1", category: "gastronomy" },
  { id: "gastronomia-2", src: gastronomia2, title: "Gastronomia 2", category: "gastronomy" },
  { id: "gastronomia-3", src: gastronomia3, title: "Gastronomia 3", category: "gastronomy" },
  { id: "gastronomia-4", src: gastronomia4, title: "Gastronomia 4", category: "gastronomy" },
  { id: "gastronomia-5", src: gastronomia5, title: "Gastronomia 5", category: "gastronomy" },
  { id: "gastronomia-6", src: gastronomia6, title: "Gastronomia 6", category: "gastronomy" },
  { id: "jantar-praia", src: jantarPraia, title: "Jantar na Praia", category: "gastronomy" },
  { id: "sala-jantar", src: salaJantar, title: "Sala de Jantar", category: "gastronomy" },
  
  // Pesca
  { id: "pesca-1", src: pesca1, title: "Pesca 1", category: "fishing" },
  { id: "pesca-2", src: pesca2, title: "Pesca 2", category: "fishing" },
  { id: "pesca-3", src: pesca3, title: "Pesca 3", category: "fishing" },
  { id: "pesca-4", src: pesca4, title: "Pesca 4", category: "fishing" },
  { id: "pesca-5", src: pesca5, title: "Pesca 5", category: "fishing" },
  { id: "pesca-6", src: pesca6, title: "Pesca 6", category: "fishing" },
  { id: "pesca-7", src: pesca7, title: "Pesca 7", category: "fishing" },
  { id: "pesca-8", src: pesca8, title: "Pesca 8", category: "fishing" },
  { id: "pesca-9", src: pesca9, title: "Pesca 9", category: "fishing" },
  { id: "pesca-10", src: pesca10, title: "Pesca 10", category: "fishing" },
  { id: "pesca-11", src: pesca11, title: "Pesca 11", category: "fishing" },
  { id: "pesca-12", src: pesca12, title: "Pesca 12", category: "fishing" },
  { id: "pesca-13", src: pesca13, title: "Pesca 13", category: "fishing" },
  { id: "pesca-14", src: pesca14, title: "Pesca 14", category: "fishing" },
  { id: "pesca-15", src: pesca15, title: "Pesca 15", category: "fishing" },
  { id: "pesca-16", src: pesca16, title: "Pesca 16", category: "fishing" },
  { id: "pesca-17", src: pesca17, title: "Pesca 17", category: "fishing" },
  { id: "pesca-18", src: pesca18, title: "Pesca 18", category: "fishing" },
  { id: "pesca-19", src: pesca19, title: "Pesca 19", category: "fishing" },
  { id: "pesca-20", src: pesca20, title: "Pesca 20", category: "fishing" },
  
  // Hero/Paisagens
  { id: "hero-aereo", src: heroAereo, title: "Vista Aérea Cabanas", category: "hero" },
  { id: "hero-aereo-rio", src: heroAereoRio, title: "Vista Aérea Rio", category: "hero" },
  { id: "hero-amazon", src: heroAmazon, title: "Amazônia", category: "hero" },
  { id: "hero-cabanas-noite", src: heroCabanasNoite, title: "Cabanas à Noite", category: "hero" },
  { id: "hero-paisagem", src: heroPaisagem, title: "Paisagem Amazônica", category: "hero" },
  { id: "hero-praia-cabanas", src: heroPraiaCabanas, title: "Praia com Cabanas", category: "hero" },
  { id: "hero-rio-curva", src: heroRioCurva, title: "Curva do Rio", category: "hero" },
  
  // Apresentação
  { id: "presentation-cover", src: presentationCover, title: "Capa Apresentação", category: "presentation" },
  { id: "presentation-amazonia", src: presentationAmazonia, title: "Amazônia", category: "presentation" },
  { id: "presentation-barcos", src: presentationBarcos, title: "Barcos", category: "presentation" },
  { id: "presentation-cabanas", src: presentationCabanas, title: "Cabanas", category: "presentation" },
  { id: "presentation-diferenciais", src: presentationDiferenciais, title: "Diferenciais", category: "presentation" },
  { id: "presentation-restaurante", src: presentationRestaurante, title: "Restaurante", category: "presentation" },
  { id: "presentation-tucunare", src: presentationTucunare, title: "Tucunaré", category: "presentation" },
  
  // Outros
  { id: "trem-do-rio", src: tremDoRio, title: "Trem do Rio", category: "other" },
];

export const useAutoImportMedia = () => {
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasImported, setHasImported] = useState(false);

  const checkAndImport = useCallback(async () => {
    // Check if media table has any data
    const { count, error } = await supabase
      .from('media')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error("Error checking media:", error);
      return;
    }

    // If there's already data, skip import
    if (count && count > 0) {
      setHasImported(true);
      return;
    }

    // Start importing
    setImporting(true);
    setProgress(0);

    for (let i = 0; i < staticPhotos.length; i++) {
      const photo = staticPhotos[i];
      
      try {
        // Fetch the image
        const response = await fetch(photo.src);
        const blob = await response.blob();
        
        // Determine file extension
        const extension = photo.src.includes('.png') ? 'png' : 'jpg';
        const fileName = `${photo.id}.${extension}`;
        const filePath = `${photo.category}/${fileName}`;
        
        // Upload to Supabase storage
        const { error: uploadError } = await supabase.storage
          .from('media')
          .upload(filePath, blob, {
            cacheControl: '3600',
            upsert: true
          });

        if (uploadError) {
          console.error(`Upload error for ${photo.id}:`, uploadError);
          continue;
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('media')
          .getPublicUrl(filePath);

        // Insert into media table
        await supabase
          .from('media')
          .insert({
            title: photo.title,
            category: photo.category,
            file_path: filePath,
            file_url: publicUrl,
            media_type: 'image',
            is_active: true,
            display_order: i
          });

      } catch (error) {
        console.error(`Failed to import ${photo.id}:`, error);
      }

      setProgress(((i + 1) / staticPhotos.length) * 100);
    }

    setImporting(false);
    setHasImported(true);
  }, []);

  return { importing, progress, hasImported, checkAndImport };
};
