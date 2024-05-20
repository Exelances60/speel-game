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
import { useLanguage } from "@/context/LanguageContext";

const HeaderLanguageDropDown = () => {
  const { changeLanguageContext, language } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Flag className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          disabled={language === "tr"}
          className="justify-center"
          onClick={() => changeLanguageContext("tr")}
        >
          TR
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={language === "en"}
          className=" justify-center"
          onClick={() => changeLanguageContext("en")}
        >
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderLanguageDropDown;
