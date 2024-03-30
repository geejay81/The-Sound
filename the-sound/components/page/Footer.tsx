export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3">
                &copy; {new Date().getFullYear()} The Sound
            </div>
        </footer>
    )
}