import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import moment from 'moment';

const PostPreview = ({ post }) => (
  <div className="post-preview">
    <h2 className="title">
      <Link to={`blog${post.slug}`}>{post.title}</Link>
    </h2>
    <p className="subtitle">
      {moment(post.date)
        .local()
        .format('MMMM DD, YYYY')}
      ・{post.timeToRead} min read
    </p>
    <p>{post.description}</p>
  </div>
);

PostPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostPreview;
