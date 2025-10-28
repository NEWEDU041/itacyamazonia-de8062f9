import tremImage from "@/assets/trem-do-rio.png";

const TremDoRio = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={tremImage} 
              alt="Estrutura flutuante Trem do Rio" 
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              TREM DO RIO
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">Nossa estrutura é composta de:</p>
              <ul className="space-y-2">
                <li>01 Rebocador;</li>
                <li>01 Casa de máquinas e 02 geradores de energia;</li>
                <li>02 Alojamentos para equipe de colaboradores;</li>
                <li>01 Cozinha;</li>
                <li>01 Sala de jantar;</li>
                <li>04 Cabanas para hospedar 08 clientes por grupo;</li>
                <li>06 Barcos de pesca, sendo 02 reservas;</li>
                <li>01 Barco de apoio.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TremDoRio;
