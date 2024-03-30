import Hero from "@/components/page/Hero";
import { getPost, getPostBySlug } from "@/utils/mdx-posts-utils"
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

type Props = {
    params: { slug: string }
}

const components = {

}

export default async function BlogPost({ params }: Props) {
    const { frontMatter, slug, content, markdownOptions } = await getPost(params.slug);

    if (!frontMatter) return notFound;

    return (
        <div>
            <Hero heading={frontMatter.title} description="" />
            <main className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3">
                <div className="prose">
                    <MDXRemote source={content} options={markdownOptions} />
                </div>
            </main>
        </div>
    )
}