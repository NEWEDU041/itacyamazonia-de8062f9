import tremImage from "@/assets/trem-do-rio.png";
import { useTranslation } from "@/hooks/useTranslation";

const TremDoRio = () => {
  const { t } = useTranslation();
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
              {t.tremDoRio.title}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">{t.tremDoRio.subtitle}</p>
              <ul className="space-y-2">
                {t.tremDoRio.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TremDoRio;
