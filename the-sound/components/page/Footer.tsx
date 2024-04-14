import { navLinks } from "@/ui/navigation/data"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="container mx-auto max-w-l flex flex-col-reverse md:flex-row md:items-center md:justify-between p-6">
                <div>&copy; {new Date().getFullYear()} The Sound</div>

                <div className="space-x-4">
                    {navLinks &&
                        navLinks
                            .filter((link: any) => link.showInFooter)
                            .map((link: any) => {
                                return (
                                    <Link key={link.url} href={link.url} title={link.title} 
                                        className="inline-flex flex-row items-center space-x-2">
                                        <span className="">{link.title}</span>
                                    </Link>
                                )
                            }
                        )
                    }
                </div> 
            </div>
        </footer>
    )
}