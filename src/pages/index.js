import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import getPosts from '../hooks/get-posts';
import PostPreview from '../components/PostPreview';

const IndexPage = () => {
  const posts = getPosts();

  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        DICK WYN <b>YONG</b>
      </h1>
      <p>
        I&apos;m a recent Computer Science graduate from Arizona State University. I have a strong
        passion for web development, mobile computing and human-computer interaction. I also enjoy
        writing blogs, taking photos and travelling.
      </p>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
