import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useSettings } from "@/hooks/useSettings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import {
  Fish,
  Loader2,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  FileText,
  Save,
} from "lucide-react";

const AdminSettings = () => {
  const navigate = useNavigate();
  const { loading: authLoading, isAuthenticated } = useAuth();
  const { settingsMap, isLoading: settingsLoading, updateMultipleSettings } = useSettings();

  // Contact form state
  const [contactForm, setContactForm] = useState({
    contact_whatsapp: "",
    contact_email: "",
    contact_phone: "",
    contact_address: "",
  });

  // Social form state
  const [socialForm, setSocialForm] = useState({
    social_instagram: "",
    social_facebook: "",
    social_youtube: "",
  });

  // SEO form state
  const [seoForm, setSeoForm] = useState({
    seo_title: "",
    seo_description: "",
    seo_keywords: "",
  });

  const [isSaving, setIsSaving] = useState(false);

  // Populate forms when settings load
  useEffect(() => {
    if (settingsMap && Object.keys(settingsMap).length > 0) {
      setContactForm({
        contact_whatsapp: settingsMap.contact_whatsapp || "",
        contact_email: settingsMap.contact_email || "",
        contact_phone: settingsMap.contact_phone || "",
        contact_address: settingsMap.contact_address || "",
      });
      setSocialForm({
        social_instagram: settingsMap.social_instagram || "",
        social_facebook: settingsMap.social_facebook || "",
        social_youtube: settingsMap.social_youtube || "",
      });
      setSeoForm({
        seo_title: settingsMap.seo_title || "",
        seo_description: settingsMap.seo_description || "",
        seo_keywords: settingsMap.seo_keywords || "",
      });
    }
  }, [settingsMap]);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate("/auth");
    }
  }, [authLoading, isAuthenticated, navigate]);

  const handleSaveContact = async () => {
    setIsSaving(true);
    try {
      await updateMultipleSettings.mutateAsync(
        Object.entries(contactForm).map(([key, value]) => ({ key, value }))
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveSocial = async () => {
    setIsSaving(true);
    try {
      await updateMultipleSettings.mutateAsync(
        Object.entries(socialForm).map(([key, value]) => ({ key, value }))
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveSeo = async () => {
    setIsSaving(true);
    try {
      await updateMultipleSettings.mutateAsync(
        Object.entries(seoForm).map(([key, value]) => ({ key, value }))
      );
    } finally {
      setIsSaving(false);
    }
  };

  if (authLoading || settingsLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/admin")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Fish className="w-8 h-8 text-accent" />
            <div>
              <h1 className="font-serif text-xl font-bold">Configurações Gerais</h1>
              <p className="text-sm text-muted-foreground">
                Gerencie informações de contato, redes sociais e SEO
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="contact" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contato
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Redes Sociais
            </TabsTrigger>
            <TabsTrigger value="seo" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              SEO
            </TabsTrigger>
          </TabsList>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>
                  Configure os dados de contato exibidos no site
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-green-500" />
                      WhatsApp
                    </Label>
                    <Input
                      id="whatsapp"
                      placeholder="+55 92 99999-9999"
                      value={contactForm.contact_whatsapp}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, contact_whatsapp: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent" />
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+55 92 3333-3333"
                      value={contactForm.contact_phone}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, contact_phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" />
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contato@exemplo.com"
                    value={contactForm.contact_email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, contact_email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    Endereço
                  </Label>
                  <Input
                    id="address"
                    placeholder="Cidade, Estado - País"
                    value={contactForm.contact_address}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, contact_address: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button onClick={handleSaveContact} disabled={isSaving}>
                    {isSaving ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Salvar Contato
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Tab */}
          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
                <CardDescription>
                  Configure os links das redes sociais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="instagram" className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-pink-500" />
                    Instagram
                  </Label>
                  <Input
                    id="instagram"
                    placeholder="https://instagram.com/seu-perfil"
                    value={socialForm.social_instagram}
                    onChange={(e) =>
                      setSocialForm({ ...socialForm, social_instagram: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook" className="flex items-center gap-2">
                    <Facebook className="w-4 h-4 text-blue-600" />
                    Facebook
                  </Label>
                  <Input
                    id="facebook"
                    placeholder="https://facebook.com/sua-pagina"
                    value={socialForm.social_facebook}
                    onChange={(e) =>
                      setSocialForm({ ...socialForm, social_facebook: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="youtube" className="flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-red-600" />
                    YouTube
                  </Label>
                  <Input
                    id="youtube"
                    placeholder="https://youtube.com/@seu-canal"
                    value={socialForm.social_youtube}
                    onChange={(e) =>
                      setSocialForm({ ...socialForm, social_youtube: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button onClick={handleSaveSocial} disabled={isSaving}>
                    {isSaving ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Salvar Redes Sociais
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Tab */}
          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>SEO - Otimização para Buscadores</CardTitle>
                <CardDescription>
                  Configure os metadados para melhorar o posicionamento do site
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="seo-title">Título do Site</Label>
                  <Input
                    id="seo-title"
                    placeholder="Nome do Site - Descrição curta"
                    value={seoForm.seo_title}
                    onChange={(e) =>
                      setSeoForm({ ...seoForm, seo_title: e.target.value })
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    Máximo recomendado: 60 caracteres ({seoForm.seo_title.length}/60)
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seo-description">Meta Descrição</Label>
                  <Textarea
                    id="seo-description"
                    placeholder="Descrição do site para mecanismos de busca..."
                    rows={3}
                    value={seoForm.seo_description}
                    onChange={(e) =>
                      setSeoForm({ ...seoForm, seo_description: e.target.value })
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    Máximo recomendado: 160 caracteres ({seoForm.seo_description.length}/160)
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seo-keywords">Palavras-chave</Label>
                  <Textarea
                    id="seo-keywords"
                    placeholder="palavra1, palavra2, palavra3..."
                    rows={2}
                    value={seoForm.seo_keywords}
                    onChange={(e) =>
                      setSeoForm({ ...seoForm, seo_keywords: e.target.value })
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    Separe as palavras-chave por vírgula
                  </p>
                </div>
                <div className="flex justify-end pt-4">
                  <Button onClick={handleSaveSeo} disabled={isSaving}>
                    {isSaving ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Salvar SEO
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminSettings;
