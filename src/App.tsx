import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Apresentacao from "./pages/Apresentacao";
import Acomodacoes from "./pages/Acomodacoes";
import Gastronomia from "./pages/Gastronomia";
import Pacotes from "./pages/Pacotes";
import OQueLevar from "./pages/OQueLevar";
import Fotos from "./pages/Fotos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/apresentacao" element={<Apresentacao />} />
            <Route path="/acomodacoes" element={<Acomodacoes />} />
            <Route path="/gastronomia" element={<Gastronomia />} />
            <Route path="/pacotes" element={<Pacotes />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/o-que-levar" element={<OQueLevar />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
