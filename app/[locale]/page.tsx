import {useTranslations} from "next-intl";
import {ThemeSwitcher} from "@/components/theme-switcher";
import {Button} from "@nextui-org/button";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";


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
