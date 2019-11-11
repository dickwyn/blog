import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => (
  <div className="post-preview">
    <h2 className="title">
      <Link to={`blog${post.slug}`}>{post.title}</Link>
    </h2>
    <p className="subtitle">
      {post.date}・{post.timeToRead} min read
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper velit eros, id
      volutpat ipsum egestas vitae. Quisque in eros nisi.
    </p>
  </div>
);

PostPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPreview;
