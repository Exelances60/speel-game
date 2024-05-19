"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useTranslations } from "next-intl";

interface IResutDrawer {
  userScore: number;
  resetGame: () => void;
}

const ResutDrawer = ({ userScore, resetGame }: IResutDrawer) => {
  const t = useTranslations("Play");
  const [open, setOpen] = useState(true);

  return (
    <Drawer open={open}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <DrawerHeader>
                <DrawerTitle>Game Over</DrawerTitle>
                <DrawerClose onClick={() => setOpen(false)} />
              </DrawerHeader>
            </div>
            <DrawerDescription>
              {t("score")}: {userScore} 🎇
            </DrawerDescription>
          </div>
          <DrawerFooter>
            <Button variant="outline" onClick={() => resetGame()}>
              {t("restart")}
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ResutDrawer;
