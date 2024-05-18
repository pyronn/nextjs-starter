import {useTranslations} from "next-intl";

export default function Home() {
    const h = useTranslations('Home')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
          hello world
          <h1>{h('title')}</h1>
      </div>
    </main>
  );
}
