import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeaderLanguageDropDown from "./HeaderLanguageDropDown";
import HeaderChandeMode from "./HeaderChangeMode";
import { useTranslations } from "next-intl";
const Header = () => {
  const t = useTranslations("Layout");
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 ">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="/"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          {t("Home")}
        </Link>
        <Link
          href="/play"
          className="text-muted-foreground hover:text-foreground"
        >
          {t("Play")}
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              {t("Home")}
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              {t("Play")}
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <HeaderChandeMode />
        <HeaderLanguageDropDown />
      </div>
    </header>
  );
};

export default Header;
