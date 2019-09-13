import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from './preview';

const BlogPostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data);
  if (data) {
    return <BlogPost data={data} />;
  }
  return <div>Loading...</div>;
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default BlogPostPreview;
