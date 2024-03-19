export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'The Sound';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'The Sound Blog';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
  const projectsTitle = process.env.PROJECT_TITLE
    ? decodeURI(process.env.PROJECT_TITLE)
    : 'The Sound Projects'

  return {
    name,
    blogTitle,
    projectsTitle,
    footerText,
  };
};
