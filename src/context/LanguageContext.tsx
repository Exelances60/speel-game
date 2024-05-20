"use client";
import { changeLanguage } from "@/action/ChangeLangugeAction";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({
  language: "en",
  changeLanguageContext: (newLanguage: string) => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const t = useTranslations("LanguageContext");
  const pathname = usePathname();
  const { toast } = useToast();
  const [language, setLanguage] = useState(getCookie("locale") || "en");

  const changeLanguageContext = (newLanguage: string) => {
    setLanguage(newLanguage);
    changeLanguage(newLanguage);
    if (pathname === "/play") {
      return toast({
        title: "Language changed",
        description: (
          <>
            {t("languageChange")} {newLanguage.toUpperCase()}
            <br />
            {t("pleaseRestart")}
            <Button
              variant="ghost"
              className="mt-2"
              onClick={() => window.location.reload()}
            >
              {t("restart")}
            </Button>
          </>
        ),
      });
    } else {
      return toast({
        title: t("languageChange"),
        description: t("languageChange") + " " + newLanguage.toUpperCase(),
      });
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguageContext }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
