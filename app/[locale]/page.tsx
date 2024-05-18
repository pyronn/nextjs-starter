import {useTranslations} from "next-intl";
import {ThemeSwitcher} from "@/components/ThemeSwitcher";
import {Button} from "@nextui-org/button";

export default function Home() {
    const h = useTranslations('Home')
  return (
    <main className="text-foreground bg-background">
      <div>
          hello world
          <Button>click me</Button>
          <h1>{h('title')}</h1>
          <ThemeSwitcher />
      </div>
    </main>
  );
}
