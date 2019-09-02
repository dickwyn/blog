import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => (
  <>
    <h1>{post.title}</h1>
    <h2>{post.date}</h2>
    <Link to={post.slug}>Read more</Link>
  </>
);

PostPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPreview;
