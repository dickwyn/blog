import { graphql, useStaticQuery } from 'gatsby';

const getPosts = () => {
  let data = '';

  if (process.env.NODE_ENV === 'development') {
    data = useStaticQuery(graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog|dev-blog/" } }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              description
            }
            timeToRead
          }
        }
      }
    `);
  } else {
    data = useStaticQuery(graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/blog/" } }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              description
            }
            timeToRead
          }
        }
      }
    `);
  }

  return data.allMarkdownRemark.nodes.map(post => ({
    slug: post.fields.slug,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    description: post.frontmatter.description,
    timeToRead: post.timeToRead,
  }));
};

export default getPosts;
