import {Sidebar} from "@/components/sidebar";

export default function AboutLayout({children}: { children: React.ReactNode }) {
return (
    <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        <div className="grid grid-cols-12">
            <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2 mt-8 pr-4">
                <Sidebar/>
            </div>
            {children}
        </div>
    </main>
)
}
