import Howzat from "@/components/apps/games/Howzat";
import Footer from "@/components/page/Footer";
import Hero from "@/components/page/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Howzat',
    description: 'Electronic version of the classic cricket dice game.'
}

export default function HowzatlePage() {
    return (
        <>
            <Hero heading={metadata.title!.toString()} description={metadata.description!.toString()} />
            <main className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3
                flex flex-col md:flex-row space-x-3">
                <div className="md:w-7/12 prose md:prose-lg">
                    <Howzat />
                </div>
            </main>
            <Footer />
        </>
    )
}