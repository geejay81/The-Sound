import Footer from "@/components/page/Footer";
import Hero from "@/components/page/Hero";
import { getProjects } from "@/utils/mdx-utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects",
    description: "Stuff we've been working on.",
  };

export default function ProjectsLandingPage() {

    const projects = getProjects();

    return (
        <>
            <Hero heading={"Projects"} description="Stuff we've been working on" />
            <main className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3
                flex flex-col md:flex-row space-x-3">
                <div className="md:w-7/12">
                    {projects && 
                        <ul>
                            {projects.map((project: any) => (
                                <li key={project.filePath}>
                                    <Link
                                        as={`/projects/${project.filePath.replace(/\.mdx?$/, '')}`}
                                        href={`/projects/[slug]`}>
                                        <div className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4 bg-gradient-to-tr from-slate-100 to-white space-y-4">
                                            <h3 className="text-2xl md:text-3xl">{project.data.title}</h3>
                                            <p>{project.data.description}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-4"><path className="stroke-current text-primary" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 19l7-7-7-7"></path></svg>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                <div className="md:w-5/12">
                    {/* Tags will go here */}
                </div>
            </main>
            <Footer />
        </>
    )
}