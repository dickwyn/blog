import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => (
  <div className="post-preview">
    <h1>{post.title}</h1>
    <h2>{post.date}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      ullamcorper velit eros, id volutpat ipsum egestas vitae. Quisque in eros
      nisi.
    </p>
    <Link to={`blog${post.slug}`}>Read more</Link>
  </div>
);

PostPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPreview;
