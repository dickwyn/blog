import React from 'react';
import Helmet from 'react-helmet';

const BlogPost = ({ data }) => {
  return (
    <div className="content blog-post">
      <Helmet titleTemplate="%s | Blog">
        <title>{`${data.title}`}</title>
        <meta name="description" content={`${data.description}`} />
      </Helmet>
      <div className="heading">
        <h1>{data.title}</h1>
        <h2>Written by {data.author} on</h2>
        {data.body}
      </div>
    </div>
  );
};

export default BlogPost;
