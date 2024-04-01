import Footer from "@/components/page/Footer";
import Hero from "@/components/page/Hero";
import { getPost } from "@/utils/mdx-utils"
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

type Props = {
    params: { slug: string }
}

export default async function BlogPost({ params }: Props) {
    const { frontMatter, slug, content, markdownOptions } = await getPost(params.slug);

    if (!frontMatter) return notFound();

    return (
        <div>
            <Hero heading={frontMatter.title} description={frontMatter.date} />
            <main className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3 flex flex-col md:flex-row md:items-start md:justify-between grow">
                <div className="prose prose-lg max-w-none md:w-7/12">
                    <MDXRemote source={content} options={markdownOptions} />
                </div>
                <div className="md:w-4/12">{/* Categories here */}</div>
            </main>
            <Footer />
        </div>
    )
}