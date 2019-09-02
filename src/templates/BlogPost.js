import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
      html
    }
  }
`;

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Helmet titleTemplate="%s | Blog">
        <title>{`${post.frontmatter.title}`}</title>
        <meta name="description" content={`${post.frontmatter.description}`} />
      </Helmet>
      <h1>{post.frontmatter.title}</h1>
      <h2>{post.frontmatter.author}</h2>
      <h2>{post.frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

// BlogPost.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({}),
//   }),
// };

export default BlogPost;
