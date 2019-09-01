import { graphql, useStaticQuery } from 'gatsby';

const getPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
          html
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes.map(post => ({
    title: post.frontmatter.title,
  }));
};

export default getPosts;
