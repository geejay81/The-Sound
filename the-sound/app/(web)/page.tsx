import logo from "@/ui/fonts/Logo";
import Footer from "@/components/page/Footer";
import Link from "next/link";

const HomeHero = () => {
  return (
    <main className="bg-gradient-to-br from-indigo-600 to-fuchsia-700 text-white">
      <div className="container mx-auto max-w-l p-6 py-12 md:py-16 space-y-3 md:space-y-10 flex flex-col items-center text-center">
          <h1 className={`text-4xl font-bold md:text-7xl ${logo.className}`}>
            The Sound</h1>
          <p className="prose md:prose-lg text-white">Hobbyist web and application developers.</p>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-4">
            <Link href="/projects" className="p-3 bg-white text-black border-black rounded-md">Projects</Link>
            <Link href="/posts" className="p-3 bg-white text-black border-black rounded-md">Blog</Link>
          </div>
      </div>
    </main>
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
