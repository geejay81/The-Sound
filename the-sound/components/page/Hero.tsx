import logo from "../fonts/Logo";

type Props = { 
    heading: string,
    description: string
};

export default function Hero({heading, description}: Props) {
    return (
        <section className="bg-gradient-to-br from-indigo-600 to-fuchsia-700 text-white">
            <div className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3">
                <h1 className={`text-3xl font-bold md:text-5xl ${logo.className}`}>{heading}</h1>
                {description && 
                    <div className="text-1xl font-semibold md:text-2xl">{description}</div>}
            </div>
        </section>
    )
}