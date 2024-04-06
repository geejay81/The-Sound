import Footer from "@/components/page/Footer";
import Hero from "@/components/page/Hero";
import { getPosts } from "@/utils/mdx-utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog",
    description: "Recent blog posts.",
  };

export default function BlogLandingPage() {

    const posts = getPosts();

    return (
        <>
            <Hero heading={"Blog"} description="Recent blog posts" />
            <main className="container mx-auto max-w-l p-6 md:pt-16 md:pb-10 space-y-3
                flex flex-col md:flex-row space-x-3">
                <div className="md:w-7/12">
                    {posts && 
                        <ul className="space-y-4">
                            {posts.map((post: any) => (
                                <li key={post.filePath}>
                                    <Link
                                        as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                                        href={`/posts/[slug]`}>
                                        <div className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4 space-y-4 bg-slate-100">
                                            <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                                            <p className="text-sm">{post.data.date}</p>
                                            <p>{post.data.description}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-4"><path className="stroke-current text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 19l7-7-7-7"></path></svg>
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