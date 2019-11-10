import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
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
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      html
    }
  }
`;

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        description,
        author,
        date,
        featuredImage: {
          childImageSharp: { fluid },
        },
      },
    },
  } = data;

  return (
    <Layout>
      <div className="content blog-post">
        <Helmet titleTemplate="%s | Blog">
          <title>{`${title}`}</title>
          <meta name="description" content={`${description}`} />
        </Helmet>
        <div className="heading">
          <h1>{title}</h1>
          <h2>
            By {author} | <a href="https://twitter.com/dickwyn">@dickwyn</a> | {date} here
          </h2>
        </div>
        <Img fluid={fluid} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default BlogPost;
