import Link from "next/link";
import logo from "../../ui/fonts/Logo";
import { FaGamepad, FaLaptop, FaQuoteLeft } from 'react-icons/fa';

export default function Navbar() {

    const navLinks = [
        {
            "title": "Projects",
            "url": "/projects",
            "showInNavbar": true,
            "icon": <FaLaptop className="inline" />
        },
        {
            "title": "Blog",
            "url": "/posts",
            "showInNavbar": true,
            "icon": <FaQuoteLeft className="inline" />
        },
        {
            "title": "Games",
            "url": "/games",
            "showInNavbar": true,
            "icon": <FaGamepad className="inline" />
        }
    ]

    return (
        <header className="bg-slate-700 text-white">
            <nav className="container mx-auto max-w-l flex items-center justify-between p-6">
                <div className="text-2xl md:text-3xl">
                    <Link href="/" className={logo.className}>
                        The Sound
                    </Link>
                </div>
                <div className="space-x-8">
                    {navLinks &&
                        navLinks
                            .filter((link: any) => link.showInNavbar)
                            .map((link: any) => (
                            <Link key={link.url} href={link.url} title={link.title} className="space-x-2">
                                {link.icon && link.icon}
                                <span className="sr-only md:not-sr-only">{link.title}</span>
                            </Link>
                        ))
                    }
                </div> 
            </nav>
        </header>
    )
}