import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export type WaterType = "crystalline" | "black" | "murky";

export interface Package {
  id: string;
  name: string;
  name_en: string | null;
  river: string;
  river_en: string | null;
  price: number;
  fishermen_count: number;
  days_count: number;
  water_type: WaterType;
  has_floatplane: boolean;
  is_premium: boolean;
  is_highlight: boolean;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface PackageInsert {
  name: string;
  name_en?: string | null;
  river: string;
  river_en?: string | null;
  price: number;
  fishermen_count?: number;
  days_count?: number;
  water_type?: WaterType;
  has_floatplane?: boolean;
  is_premium?: boolean;
  is_highlight?: boolean;
  is_active?: boolean;
  display_order?: number;
}

export interface PackageUpdate extends Partial<PackageInsert> {
  id: string;
}

export const usePackages = (activeOnly = true) => {
  return useQuery({
    queryKey: ["packages", activeOnly],
    queryFn: async () => {
      let query = supabase
        .from("packages")
        .select("*")
        .order("display_order", { ascending: true });

      if (activeOnly) {
        query = query.eq("is_active", true);
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching packages:", error);
        throw error;
      }

      return data as Package[];
    },
  });
};

export const usePackagesMutations = () => {
  const queryClient = useQueryClient();

  const createPackage = useMutation({
    mutationFn: async (pkg: PackageInsert) => {
      const { data, error } = await supabase
        .from("packages")
        .insert(pkg)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
      toast({
        title: "Pacote criado",
        description: "O pacote foi criado com sucesso.",
      });
    },
    onError: (error) => {
      console.error("Error creating package:", error);
      toast({
        title: "Erro ao criar pacote",
        description: "Não foi possível criar o pacote.",
        variant: "destructive",
      });
    },
  });

  const updatePackage = useMutation({
    mutationFn: async ({ id, ...updates }: PackageUpdate) => {
      const { data, error } = await supabase
        .from("packages")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
      toast({
        title: "Pacote atualizado",
        description: "O pacote foi atualizado com sucesso.",
      });
    },
    onError: (error) => {
      console.error("Error updating package:", error);
      toast({
        title: "Erro ao atualizar pacote",
        description: "Não foi possível atualizar o pacote.",
        variant: "destructive",
      });
    },
  });

  const deletePackage = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("packages").delete().eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
      toast({
        title: "Pacote excluído",
        description: "O pacote foi excluído com sucesso.",
      });
    },
    onError: (error) => {
      console.error("Error deleting package:", error);
      toast({
        title: "Erro ao excluir pacote",
        description: "Não foi possível excluir o pacote.",
        variant: "destructive",
      });
    },
  });

  const reorderPackages = useMutation({
    mutationFn: async (packages: { id: string; display_order: number }[]) => {
      const promises = packages.map((pkg) =>
        supabase
          .from("packages")
          .update({ display_order: pkg.display_order })
          .eq("id", pkg.id)
      );

      const results = await Promise.all(promises);
      const errors = results.filter((r) => r.error);
      if (errors.length > 0) throw errors[0].error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
    },
    onError: (error) => {
      console.error("Error reordering packages:", error);
      toast({
        title: "Erro ao reordenar",
        description: "Não foi possível reordenar os pacotes.",
        variant: "destructive",
      });
    },
  });

  return {
    createPackage,
    updatePackage,
    deletePackage,
    reorderPackages,
  };
};
