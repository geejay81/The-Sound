import Footer from "@/components/page/Footer"
import Hero from "@/components/page/Hero"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Games',
    description: 'Fun little games to play.'
}

export default function GamesPage() {
    return (
        <>
            <Hero 
                heading={metadata.title!.toString()}
                description={metadata.description!.toString()} />
            <main className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3
                flex flex-col md:flex-row space-x-3">
                <div className="prose md:prose-lg">
                    <h2>List of games to play</h2>
                    <ul>
                        <li><Link href="https://popidle.the-sound.co.uk">PopIdle</Link></li>
                        <li><Link href="/games/howzat">Howzat!</Link></li>
                    </ul>  
                </div>   
            </main>
            <Footer />
        </>
    )
}