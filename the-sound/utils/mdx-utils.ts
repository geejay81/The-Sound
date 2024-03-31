import path from "path";
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';
import Post from '../types/Post';

export const POSTS_PATH = path.join(process.cwd(), 'posts');
export const PROJECTS_PATH = path.join(process.cwd(), 'projects');

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const projectsFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

// export const sortPostsByDate = (posts: Post) => {
//     return posts.sort((a, b) => {
//         const aDate = new Date(a.data.date);
//         const bDate = new Date(b.data.date);
//         return bDate - aDate;
//     });
// };

  export const getPosts = () => {
    let posts = postFilePaths.map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);
  
      return {
        content,
        data,
        filePath,
      };
    });
  
    // posts = sortPostsByDate(posts);
  
    return posts;
  };

  export const getPost = async (slug: string) => {
    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postFilePath);
    const { data: frontMatter, content } = matter(source);

    return {
        frontMatter,
        slug,
        content,
        markdownOptions
    }
  }

  const markdownOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    }
  }


export const getProjects = () => {
  let projects = projectsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return projects;
}

export const getProject = async (slug: string) => {
  const projectFilePath = path.join(PROJECTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(projectFilePath);
  const { data: frontMatter, content } = matter(source);

  return {
      frontMatter,
      slug,
      content,
      markdownOptions
  }
}