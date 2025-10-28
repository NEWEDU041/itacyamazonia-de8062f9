import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export const useTranslation = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  
  return {
    t: translations[language],
    language,
    setLanguage,
  };
};
