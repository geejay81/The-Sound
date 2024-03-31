import Footer from "@/components/page/Footer";
import Hero from "@/components/page/Hero";
import { getProject } from "@/utils/mdx-utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";


type Props = {
    params: { slug: string }
};

export default async function ProjectPage({ params }: Props) {
    const { frontMatter, slug, content, markdownOptions } = await getProject(params.slug);

    if (!frontMatter) return notFound();

    return (
        <div>
            <Hero heading={frontMatter.title} description={frontMatter.description} />
            <main className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3 flex flex-col md:flex-row md:items-start md:justify-between grow">
                <div className="prose prose-lg max-w-none md:w-7/12">
                    <MDXRemote source={content} options={markdownOptions} />
                </div>
                <div className="prose prose-lg md:w-4/12">
                    <dl>
                        <dt>Visit project site:</dt>
                        <dd>
                            <Link href={frontMatter.url}>{frontMatter.url}</Link>
                        </dd>
                        <dt>Type:</dt>
                        <dd>
                            {frontMatter.type}
                        </dd>
                        <dt>Technologies:</dt>
                        <dd>
                            <ul>
                                {frontMatter.technologies.map((tech:string) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </dd>
                    </dl>
                </div>
            </main>
            <Footer />
        </div>
    );
}