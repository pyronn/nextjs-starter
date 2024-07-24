'use client'
import {useTranslations} from "next-intl";
import {Hero} from "@/components/hero";
import {Pricing} from "@/components/pricing";
import {Toaster} from "sonner";


export default function Home() {
    const h = useTranslations('Home')
    const pricePlans = [
        {
            title: "Basic",
            price: 10,
            description: "Basic plan",
            link: "#",
            features: ["Feature 1", "Feature 2"]
        }, {
            title: "Pro",
            price: 20,
            description: "Pro plan",
            link: "#",
            features: ["Feature 1", "Feature 2"]
        }, {
            title: "Enterprise",
            price: 30,
            description: "Enterprise plan",
            link: "#",
            features: ["Feature 1", "Feature 2"]
        }
    ]



    return (
        <main
            className="mx-auto mt-6 flex h-[80vh] flex-col items-center text-center gap-8 text-foreground bg-background">
            <Toaster position={'top-center'}/>
            <Hero/>

            <Pricing pricePlans={pricePlans}/>

        </main>
    );
}
