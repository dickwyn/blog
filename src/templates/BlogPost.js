import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';

library.add(fab);

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
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
      timeToRead
      html
    }
  }
`;

const BlogPost = ({ data, pageContext }) => {
  const {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        date,
        featuredImage: {
          childImageSharp: { fluid },
        },
      },
      timeToRead,
      html,
    },
  } = data;

  const { previous, next } = pageContext;

  return (
    <Layout>
      <div className="content blog-post">
        <Helmet titleTemplate="%s - Blog">
          <title>{`${title}`}</title>
          <meta name="description" content={`${description}`} />
        </Helmet>
        <div className="heading">
          <h1 className="post-title">{title}</h1>
          <h2 className="post-subtitle">
            <a href="https://twitter.com/dickwyn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
              @dickwyn
            </a>{' '}
            ・{date}・{timeToRead} min read
          </h2>
        </div>
        <Img fluid={fluid} imgStyle={{ objectFit: 'contain' }} />
        <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        {previous && (
          <Link to={`/blog/${previous.fields.slug}`} className="previous-post">
            ← {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={`/blog/${next.fields.slug}`} className="next-post">
            {next.frontmatter.title} →
          </Link>
        )}
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
