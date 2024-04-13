import logo from "@/ui/fonts/Logo";
import Footer from "@/components/page/Footer";
import Link from "next/link";
import { FaLaptop, FaQuoteLeft } from "react-icons/fa";

const HomeHero = () => {
  return (
    <>
      <main className="bg-gradient-to-br from-indigo-600 to-fuchsia-700 text-white">
        <div className="container mx-auto max-w-l p-6 py-32 space-y-8 md:space-y-16 flex flex-col items-center text-center">
            <h1 className={`text-4xl font-bold md:text-8xl ${logo.className}`}>
              The Sound</h1>
            <p className="prose prose-lg text-white">Hobbyist web and application developers.</p>
            <div className="inline-flex items-center justify-center space-x-4">
              <Link href="/projects" className="p-3 bg-white text-black border-black rounded-md space-x-2 flex flex-row items-center">
                <FaLaptop />
                <span>Projects</span></Link>
              <Link href="/posts" className="p-3 bg-white text-black border-black rounded-md space-x-2 flex flex-row items-center">
                <FaQuoteLeft />
                <span>Blog</span></Link>
            </div>
        </div>
      </main>
    </>
    
  )
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <Footer />
    </>
    
  );
}
