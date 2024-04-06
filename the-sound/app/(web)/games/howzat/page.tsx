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
            <Howzat numberOfInnings={1} wicketsPerInnings={9} oversPerInnings={50}  />
        </>
    )
}