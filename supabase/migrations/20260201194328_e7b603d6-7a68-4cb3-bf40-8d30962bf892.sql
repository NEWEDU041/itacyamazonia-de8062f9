-- Create site_settings table for storing general site configuration
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  category TEXT NOT NULL DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can view settings (for displaying contact info, etc.)
CREATE POLICY "Anyone can view settings"
  ON public.site_settings
  FOR SELECT
  USING (true);

-- Only admins can insert settings
CREATE POLICY "Admins can insert settings"
  ON public.site_settings
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update settings
CREATE POLICY "Admins can update settings"
  ON public.site_settings
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete settings
CREATE POLICY "Admins can delete settings"
  ON public.site_settings
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default settings
INSERT INTO public.site_settings (key, value, category) VALUES
  ('contact_whatsapp', '+55 92 99999-9999', 'contact'),
  ('contact_email', 'contato@riverplateanglers.com', 'contact'),
  ('contact_phone', '+55 92 3333-3333', 'contact'),
  ('contact_address', 'Manaus, Amazonas - Brasil', 'contact'),
  ('social_instagram', 'https://instagram.com/riverplateanglers', 'social'),
  ('social_facebook', 'https://facebook.com/riverplateanglers', 'social'),
  ('social_youtube', 'https://youtube.com/@riverplateanglers', 'social'),
  ('seo_title', 'River Plate Anglers - Pesca Esportiva na Amazônia', 'seo'),
  ('seo_description', 'A melhor experiência de pesca esportiva na Amazônia brasileira. Pacotes exclusivos com cabanas flutuantes e guias especializados.', 'seo'),
  ('seo_keywords', 'pesca esportiva, amazônia, tucunaré, pesca, brasil, manaus', 'seo');