import Footer from "@/components/page/Footer";
import Hero from "@/components/page/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Stuff we've been working on.",
  };

export default function ProjectsLandingPage() {
    return (
        <>
            <Hero heading={"Projects"} description="Stuff we've been working on" />
            <Footer />
        </>
    )
}