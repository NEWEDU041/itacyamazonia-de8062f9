import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useAdminRole } from "@/hooks/useAdminRole";
import { usePackages, usePackagesMutations, Package, PackageInsert, WaterType } from "@/hooks/usePackages";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import {
  Fish,
  Loader2,
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  Plane,
  Star,
} from "lucide-react";

const waterTypeLabels: Record<WaterType, string> = {
  crystalline: "Cristalinas",
  black: "Negras",
  murky: "Turvas",
};

const waterTypeColors: Record<WaterType, string> = {
  crystalline: "bg-blue-100 text-blue-800",
  black: "bg-gray-800 text-white",
  murky: "bg-amber-100 text-amber-800",
};

const emptyPackage: PackageInsert = {
  name: "",
  name_en: "",
  river: "",
  river_en: "",
  price: 0,
  fishermen_count: 6,
  days_count: 6,
  water_type: "crystalline",
  has_floatplane: false,
  is_premium: false,
  is_highlight: false,
  is_active: true,
  display_order: 0,
};

const AdminPackages = () => {
  const navigate = useNavigate();
  const { loading: authLoading, isAuthenticated } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdminRole();
  const { data: packages, isLoading: packagesLoading } = usePackages(false);
  const { createPackage, updatePackage, deletePackage } = usePackagesMutations();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState<Package | null>(null);
  const [formData, setFormData] = useState<PackageInsert>(emptyPackage);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate("/auth");
    }
  }, [authLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (!adminLoading && !isAdmin && isAuthenticated) {
      toast({
        title: "Acesso negado",
        description: "Você não tem permissão para acessar esta página.",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [adminLoading, isAdmin, isAuthenticated, navigate]);

  const handleOpenDialog = (pkg?: Package) => {
    if (pkg) {
      setEditingPackage(pkg);
      setFormData({
        name: pkg.name,
        name_en: pkg.name_en,
        river: pkg.river,
        river_en: pkg.river_en,
        price: pkg.price,
        fishermen_count: pkg.fishermen_count,
        days_count: pkg.days_count,
        water_type: pkg.water_type,
        has_floatplane: pkg.has_floatplane,
        is_premium: pkg.is_premium,
        is_highlight: pkg.is_highlight,
        is_active: pkg.is_active,
        display_order: pkg.display_order,
      });
    } else {
      setEditingPackage(null);
      setFormData({
        ...emptyPackage,
        display_order: (packages?.length || 0) + 1,
      });
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.river || formData.price <= 0) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha nome, rio e preço.",
        variant: "destructive",
      });
      return;
    }

    if (editingPackage) {
      await updatePackage.mutateAsync({ id: editingPackage.id, ...formData });
    } else {
      await createPackage.mutateAsync(formData);
    }
    setIsDialogOpen(false);
  };

  const handleDelete = async (id: string) => {
    await deletePackage.mutateAsync(id);
    setDeleteConfirmId(null);
  };

  const isLoading = authLoading || adminLoading || packagesLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/admin")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Fish className="w-8 h-8 text-accent" />
            <div>
              <h1 className="font-serif text-xl font-bold">Gerenciar Pacotes</h1>
              <p className="text-sm text-muted-foreground">Adicione, edite ou remova pacotes</p>
            </div>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => handleOpenDialog()}>
                <Plus className="w-4 h-4 mr-2" />
                Novo Pacote
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingPackage ? "Editar Pacote" : "Novo Pacote"}
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome (PT) *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Alto Itapará Premium"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name_en">Nome (EN)</Label>
                  <Input
                    id="name_en"
                    value={formData.name_en || ""}
                    onChange={(e) => setFormData({ ...formData, name_en: e.target.value })}
                    placeholder="Ex: Itapara Upper Premium"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="river">Rio (PT) *</Label>
                  <Input
                    id="river"
                    value={formData.river}
                    onChange={(e) => setFormData({ ...formData, river: e.target.value })}
                    placeholder="Ex: Alto Itapará"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="river_en">Rio (EN)</Label>
                  <Input
                    id="river_en"
                    value={formData.river_en || ""}
                    onChange={(e) => setFormData({ ...formData, river_en: e.target.value })}
                    placeholder="Ex: Itapara Upper"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Preço (USD) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                    placeholder="6490"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="water_type">Tipo de Água</Label>
                  <Select
                    value={formData.water_type}
                    onValueChange={(value) => setFormData({ ...formData, water_type: value as WaterType })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crystalline">Cristalinas</SelectItem>
                      <SelectItem value="black">Negras</SelectItem>
                      <SelectItem value="murky">Turvas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fishermen_count">Nº de Pescadores</Label>
                  <Input
                    id="fishermen_count"
                    type="number"
                    value={formData.fishermen_count}
                    onChange={(e) => setFormData({ ...formData, fishermen_count: parseInt(e.target.value) || 6 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="days_count">Nº de Dias</Label>
                  <Input
                    id="days_count"
                    type="number"
                    value={formData.days_count}
                    onChange={(e) => setFormData({ ...formData, days_count: parseInt(e.target.value) || 6 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="display_order">Ordem de Exibição</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="space-y-4 md:col-span-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="has_floatplane">Inclui Hidroavião</Label>
                    <Switch
                      id="has_floatplane"
                      checked={formData.has_floatplane}
                      onCheckedChange={(checked) => setFormData({ ...formData, has_floatplane: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="is_premium">Pacote Premium</Label>
                    <Switch
                      id="is_premium"
                      checked={formData.is_premium}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_premium: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="is_highlight">Destaque (Popular)</Label>
                    <Switch
                      id="is_highlight"
                      checked={formData.is_highlight}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_highlight: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="is_active">Ativo</Label>
                    <Switch
                      id="is_active"
                      checked={formData.is_active}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </DialogClose>
                <Button onClick={handleSubmit} disabled={createPackage.isPending || updatePackage.isPending}>
                  {(createPackage.isPending || updatePackage.isPending) && (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  )}
                  {editingPackage ? "Salvar" : "Criar"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fish className="w-5 h-5" />
              Pacotes ({packages?.length || 0})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {packages && packages.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Rio</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {packages.map((pkg) => (
                      <TableRow key={pkg.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            {pkg.name}
                            {pkg.is_premium && (
                              <Badge variant="secondary" className="text-xs">
                                <Star className="w-3 h-3 mr-1" />
                                Premium
                              </Badge>
                            )}
                            {pkg.is_highlight && (
                              <Badge className="text-xs bg-accent text-accent-foreground">
                                Popular
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {pkg.river}
                            {pkg.has_floatplane && (
                              <Plane className="w-4 h-4 text-accent" />
                            )}
                          </div>
                        </TableCell>
                        <TableCell>${pkg.price.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={waterTypeColors[pkg.water_type]}>
                            {waterTypeLabels[pkg.water_type]}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={pkg.is_active ? "default" : "outline"}>
                            {pkg.is_active ? "Ativo" : "Inativo"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleOpenDialog(pkg)}
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Dialog open={deleteConfirmId === pkg.id} onOpenChange={(open) => !open && setDeleteConfirmId(null)}>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-destructive hover:text-destructive"
                                  onClick={() => setDeleteConfirmId(pkg.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Confirmar Exclusão</DialogTitle>
                                </DialogHeader>
                                <p className="text-muted-foreground">
                                  Tem certeza que deseja excluir o pacote "{pkg.name}"? Esta ação não pode ser desfeita.
                                </p>
                                <DialogFooter>
                                  <DialogClose asChild>
                                    <Button variant="outline">Cancelar</Button>
                                  </DialogClose>
                                  <Button
                                    variant="destructive"
                                    onClick={() => handleDelete(pkg.id)}
                                    disabled={deletePackage.isPending}
                                  >
                                    {deletePackage.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                                    Excluir
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Fish className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Nenhum pacote cadastrado</p>
                <Button className="mt-4" onClick={() => handleOpenDialog()}>
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Primeiro Pacote
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminPackages;
