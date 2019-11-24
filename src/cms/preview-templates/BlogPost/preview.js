/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';

const BlogPost = ({ data }) => {
  return (
    <div className="content blog-post">
      <Helmet titleTemplate="%s | Blog">
        <title>{`${data.title}`}</title>
        <meta name="description" content={`${data.description}`} />
      </Helmet>
      <div className="preview">
        <h1>{data.title}</h1>
        <img src={data.featuredImage} alt="featured" />
        <div className="preview-body" dangerouslySetInnerHTML={{ __html: data.body }} />
        <hr />
        <h2>Debugging</h2>
        <pre>{JSON.stringify(data, 'null', '\t')}</pre>
      </div>
    </div>
  );
};

export default BlogPost;
