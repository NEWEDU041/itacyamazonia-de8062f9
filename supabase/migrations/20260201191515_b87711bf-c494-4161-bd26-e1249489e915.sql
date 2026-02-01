-- Create water type enum
CREATE TYPE public.water_type AS ENUM ('crystalline', 'black', 'murky');

-- Create packages table
CREATE TABLE public.packages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  name_en TEXT,
  river TEXT NOT NULL,
  river_en TEXT,
  price DECIMAL(10,2) NOT NULL,
  fishermen_count INTEGER NOT NULL DEFAULT 6,
  days_count INTEGER NOT NULL DEFAULT 6,
  water_type water_type NOT NULL DEFAULT 'crystalline',
  has_floatplane BOOLEAN NOT NULL DEFAULT false,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  is_highlight BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;

-- Public can view active packages
CREATE POLICY "Anyone can view active packages"
ON public.packages
FOR SELECT
USING (is_active = true);

-- Admins can manage all packages
CREATE POLICY "Admins can view all packages"
ON public.packages
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert packages"
ON public.packages
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update packages"
ON public.packages
FOR UPDATE
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete packages"
ON public.packages
FOR DELETE
USING (has_role(auth.uid(), 'admin'));

-- Add trigger for updated_at
CREATE TRIGGER update_packages_updated_at
BEFORE UPDATE ON public.packages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert existing packages data
INSERT INTO public.packages (name, name_en, river, river_en, price, fishermen_count, days_count, has_floatplane, is_premium, is_highlight, display_order) VALUES
('Alto Itapará', 'Itapara Upper', 'Alto Itapará', 'Itapara Upper', 6490, 6, 6, true, true, false, 1),
('Alto Jufari', 'Jufari Upper', 'Alto Jufari', 'Jufari Upper', 6490, 6, 6, true, true, false, 2),
('Alto Abacaxis', 'Abacaxis Upper', 'Alto Abacaxis', 'Abacaxis Upper', 6490, 6, 6, true, true, false, 3),
('Rio Uneuixi', 'Uniuixi River', 'Rio Uneuixi', 'Uniuixi River', 6990, 6, 6, true, true, true, 4),
('Alto Itapará Standard', 'Itapara Upper Standard', 'Alto Itapará', 'Itapara Upper', 5490, 6, 6, false, false, false, 5),
('Alto Jufari Standard', 'Jufari Upper Standard', 'Alto Jufari', 'Jufari Upper', 5490, 6, 6, false, false, false, 6),
('Rio Paratucu', 'Paratucu River', 'Rio Paratucu', 'Paratucu River', 5490, 6, 6, false, false, false, 7),
('Alto Uneuixi', 'Uneuixi Upper', 'Alto Uneuixi', 'Uneuixi Upper', 5990, 6, 6, false, false, false, 8);