import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import getPosts from '../hooks/get-posts';
import getDevelopmentPosts from '../hooks/get-development-posts';
import PostPreview from '../components/PostPreview';

const IndexPage = () => {
  const posts = process.env.NODE_ENV === 'development' ? getDevelopmentPosts() : getPosts();

  return (
    <Layout>
      <SEO title="Home" />
      <div className="content">
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
