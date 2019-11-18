import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import getPosts from '../hooks/get-posts';
import PostPreview from '../components/PostPreview';

const IndexPage = () => {
  const posts = getPosts();

  return (
    <Layout>
      <SEO title="Home" />
      <div className="content">
        <div className="banner">
          <p>
            <span role="img" aria-labelledby="construction emoji">
              🚧
            </span>
            Site is still under construction. All content is just test data for development purposes
            only. View{' '}
            <a href="https://www.dickwyn.wordpress.com" target="_blank" rel="noopener noreferrer">
              https://www.dickwyn.wordpress.com
            </a>{' '}
            for old blog posts.{' '}
            <span role="img" aria-labelledby="construction emoji">
              🚧
            </span>
          </p>
        </div>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
