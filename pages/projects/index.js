import Link from 'next/link';

import Footer from '../../components/Footer';
import Layout, { GradientBackground } from '../../components/Layout';
import ArrowIcon from '../../components/ArrowIcon';
import { getGlobalData } from '../../utils/global-data';
import SEO from '../../components/SEO';
import { getProjects } from '../../utils/mdx-projects-utils';
import Navbar from '../../components/Navbar';

export default function Projects({ projects, globalData }) {
    return (
        <Layout>
            <SEO 
                title={`Projects - ${globalData.name}`}
                description={"The Sound's Projects."} />
      <Navbar />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 heading">
          Projects
        </h1>
        <ul className="w-full">
          {projects.map((project) => (
            <li
              key={project.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/projects/${project.filePath.replace(/\.mdx?$/, '')}`}
                href={`/projects/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {project.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {project.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{project.data.title}</h2>
                  {project.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {project.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
    )
}

export function getStaticProps() {
    const projects = getProjects();
    const globalData = getGlobalData();
  
    return { props: { projects, globalData } };
  }