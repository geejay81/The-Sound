import Link from "next/link";

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
        <header className="text-slate">
            <nav className="container mx-auto max-w-l flex items-center justify-between p-6">
                <div>
                    <Link href="/">The Sound</Link>
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