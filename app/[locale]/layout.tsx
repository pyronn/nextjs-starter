import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import {Providers} from "@/app/[locale]/providers";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages} from "next-intl/server";
import {Navbar} from "@/components/navbar";
import ScrollToTopButton from "@/components/scroll-to-top";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
                                             children,
                                             params: {locale},
                                         }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages()
    return (
        <html lang="{locale}">
        <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
            <Providers>
                <main className={'flex flex-col'}>
                    <Navbar className={'flex-auto'}/>
                    <div className={'flex-1'}>
                        {children}
                    </div>
                    <ScrollToTopButton />
                </main>
            </Providers>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
