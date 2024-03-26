import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className="relative container mx-auto p-6">
            <div class="flex items-center justify-between">
                <Link href="/">
                    <a>
                        <FontAwesomeIcon icon={faMusic} className="font-semibold text-xl px-3" />
                        <span className="font-semibold text-xl tracking-tight">The Sound</span>
                    </a>
                </Link>
                <div class="space-x-6">
                    <Link href="/projects">Projects</Link>
                    <Link href="/posts">Blog</Link>
                </div>
            </div>
        </nav>
    );
}