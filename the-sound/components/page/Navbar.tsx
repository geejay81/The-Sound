import Link from "next/link";
import logo from "../fonts/Logo";

export default function Navbar() {

    const navLinks = [
        {
            "title": "Projects",
            "url": "/projects"
        },
        {
            "title": "Blog",
            "url": "/posts"
        }
    ]

    return (
        <header className="bg-slate-700 text-white">
            <nav className="container mx-auto max-w-l flex items-center justify-between p-6">
                <div className="text-2xl md:text-3xl">
                    <Link href="/" className={logo.className}>The Sound</Link>
                </div>
                <div className="space-x-5">
                    {navLinks &&
                        navLinks.map((link: any) => (
                            <Link key={link.url} href={link.url}>
                                {link.title}
                            </Link>
                        ))
                    }
                </div> 
            </nav>
        </header>
    )
}