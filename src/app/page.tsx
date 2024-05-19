import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="w-full h-full flex flex-col items-center gap-5 justify-center ">
      <h1 className="text-xl lg:text-5xl font-press-start font-bold text-primary">
        {t("welcome")}
      </h1>
      <Button variant={"default"}>
        <Link href="/play">{t("playGame")}</Link>
      </Button>
    </div>
  );
}
