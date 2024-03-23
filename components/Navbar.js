import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
            <Link href="/">
                <div className="flex justify-between">
                    <FontAwesomeIcon icon={faMusic} className="font-semibold text-xl px-3" />
                    <span className="font-semibold text-xl tracking-tight">The Sound</span>
                </div>
            </Link>
        </nav>
    );
}