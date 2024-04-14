import Link from "next/link";
import logo from "../../ui/fonts/Logo";
import { navLinks } from "@/ui/navigation/data";

export default function Navbar() {

    return (
        <header className="bg-slate-700 text-white">
            <nav className="container mx-auto max-w-l flex items-center justify-between p-6">
                <div className="text-2xl md:text-3xl">
                    <Link href="/" className={logo.className}>
                        The Sound
                    </Link>
                </div>
                <div className="space-x-4">
                    {navLinks &&
                        navLinks
                            .filter((link: any) => link.showInNavbar)
                            .map((link: any) => {
                                return (
                                    <Link key={link.url} href={link.url} title={link.title} 
                                        className="inline-flex flex-row items-center space-x-2">
                                        {link.icon && link.icon}
                                        <span className="sr-only md:not-sr-only">{link.title}</span>
                                    </Link>
                                )
                            }
                        )
                    }
                </div> 
            </nav>
        </header>
    )
}