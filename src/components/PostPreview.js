import React from 'react';
import PropTypes from 'prop-types';

const PostPreview = ({ post }) => (
  <>
    <h1>{post.title}</h1>
    <h2>{post.author}</h2>
    <p>{post.slug}</p>
  </>
);

PostPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPreview;
