import Link from "next/link";
import logo from "../../ui/fonts/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    const navLinks = [
        {
            "title": "Projects",
            "url": "/projects",
            "showInNavbar": true
        },
        {
            "title": "Blog",
            "url": "/posts",
            "showInNavbar": true
        },
        {
            "title": "Games",
            "url": "/games",
            "showInNavbar": false
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
                        navLinks
                            .filter((link: any) => link.showInNavbar)
                            .map((link: any) => (
                            <Link key={link.url} href={link.url} className="space-x-2">
                                {/* <FontAwesomeIcon icon={faFolder} /> */}
                                <span>{link.title}</span>
                            </Link>
                        ))
                    }
                </div> 
            </nav>
        </header>
    )
}