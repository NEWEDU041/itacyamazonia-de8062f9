import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export interface SiteSetting {
  id: string;
  key: string;
  value: string | null;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface SettingsMap {
  [key: string]: string;
}

export const useSettings = (category?: string) => {
  const queryClient = useQueryClient();

  const { data: settings, isLoading } = useQuery({
    queryKey: ["site-settings", category],
    queryFn: async () => {
      let query = supabase.from("site_settings").select("*");
      
      if (category) {
        query = query.eq("category", category);
      }
      
      const { data, error } = await query.order("key");
      
      if (error) throw error;
      return data as SiteSetting[];
    },
  });

  const settingsMap: SettingsMap = settings?.reduce((acc, setting) => {
    acc[setting.key] = setting.value || "";
    return acc;
  }, {} as SettingsMap) || {};

  const updateSetting = useMutation({
    mutationFn: async ({ key, value }: { key: string; value: string }) => {
      const { error } = await supabase
        .from("site_settings")
        .update({ value })
        .eq("key", key);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site-settings"] });
    },
    onError: (error) => {
      console.error("Error updating setting:", error);
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar a configuração.",
        variant: "destructive",
      });
    },
  });

  const updateMultipleSettings = useMutation({
    mutationFn: async (updates: { key: string; value: string }[]) => {
      const promises = updates.map(({ key, value }) =>
        supabase.from("site_settings").update({ value }).eq("key", key)
      );
      
      const results = await Promise.all(promises);
      const errors = results.filter((r) => r.error);
      
      if (errors.length > 0) {
        throw new Error("Some settings failed to update");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site-settings"] });
      toast({
        title: "Configurações salvas",
        description: "As configurações foram atualizadas com sucesso.",
      });
    },
    onError: (error) => {
      console.error("Error updating settings:", error);
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar algumas configurações.",
        variant: "destructive",
      });
    },
  });

  return {
    settings,
    settingsMap,
    isLoading,
    updateSetting,
    updateMultipleSettings,
  };
};
