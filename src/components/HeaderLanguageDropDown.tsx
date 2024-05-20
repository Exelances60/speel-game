"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";
import { changeLanguage } from "@/action/ChangeLangugeAction";
import { getCookie } from "cookies-next";
import { useToast } from "./ui/use-toast";

const HeaderLanguageDropDown = () => {
  const { toast } = useToast();

  const currentLanguage = getCookie("locale") || "en";
  const setCurrentLanguage = (language: string) => {
    changeLanguage(language);
    return toast({
      title: "Language Changed 🌐",
      description: `Language changed successfully 🎉 ${language.toUpperCase()} `,
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Flag className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          disabled={currentLanguage === "tr"}
          className=" justify-center"
          onClick={() => setCurrentLanguage("tr")}
        >
          TR
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={currentLanguage === "en"}
          className=" justify-center"
          onClick={() => setCurrentLanguage("en")}
        >
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderLanguageDropDown;
