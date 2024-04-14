import Footer from "@/components/page/Footer"
import Hero from "@/components/page/Hero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tools",
    description: "Useful tools and calculators"
}

export default function ToolsPage() {
    return (
        <>
            <Hero
                heading={metadata.title!.toString()}
                description={metadata.description!.toString()}
            />
            <main className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3
                flex flex-col md:flex-row space-x-3">
                <div className="prose md:prose-lg">

                The tools will appear here as they are developed.
                    
                </div>   
            </main>
            <Footer />
        </>
    )
}