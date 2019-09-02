import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import getPosts from '../hooks/get-posts';
import PostPreview from '../components/PostPreview';

const Blog = () => {
  const posts = getPosts();

  return (
    <Layout>
      <SEO title="Home" />
      <div className="content">
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
