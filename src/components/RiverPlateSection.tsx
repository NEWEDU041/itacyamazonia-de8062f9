import dryZoneMap from "@/assets/dry-zone-map.png";

const RiverPlateSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={dryZoneMap} 
              alt="Mapa de Zonas Secas da Amazônia" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              A River Plate Anglers oferece uma experiência de pesca esportiva de luxo e exclusiva no coração da Amazônia, centrada em Manaus.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Principais Diferenciais e Características:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Exclusividade Total:</h4>
                  <p className="text-foreground/80">A empresa detém licenças de pesca exclusivas em 11 rios dentro de reservas indígenas e unidades de conservação, onde só seus hóspedes podem pescar.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Mobilidade Estratégica:</h4>
                  <p className="text-foreground/80">Com mais de 12 zonas particulares e acampamentos flutuantes móveis, eles garantem acesso às melhores águas na época certa, superando a variação sazonal dos níveis dos rios.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Área Massiva:</h4>
                  <p className="text-foreground/80">Operam em uma vasta área de 3,5 milhões de hectares, com mais de 1.500 milhas de rios.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Foco no Tucunaré:</h4>
                  <p className="text-foreground/80">Especializada na pesca do tucunaré, considerado o peixe esportivo de água doce mais agressivo e forte do mundo, com altas chances de capturar exemplares recordes (acima de 9 kg).</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Outras Espécies:</h4>
                  <p className="text-foreground/80">Também é possível pescar outras espécies como pirarara, piraíba e traíra.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Compromisso Social e Ambiental:</h4>
                  <p className="text-foreground/80">Em troca do acesso, a empresa contribui financeiramente com as comunidades locais (os "guardiões da floresta") e para a proteção territorial.</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-foreground/90 leading-relaxed pt-4">
              Serviço de pesca de alto padrão, com acesso privilegiado aos melhores locais da Amazônia, focado em proporcionar uma aventura única e de classe mundial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiverPlateSection;
