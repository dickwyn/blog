import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="content">
      <h1>404</h1>
      <h2>Something&apos;s wrong</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Go back <Link to="/">home</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
