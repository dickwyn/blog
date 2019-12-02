import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

class NotFoundPage extends Component {
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;

    if (!pathname.includes('/images') && pathname.includes('/20')) {
      global.window.location.href = `https://dickwyn.wordpress.com${pathname}`;
    }
  }

  render() {
    const {
      location: { href, origin, pathname },
    } = this.props;
    return (
      <Layout>
        <SEO title="404: Not found" />
        <div className="content">
          <h1>404 - Not found</h1>
          <h2>Something&apos;s wrong</h2>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <h3>Diagnostic information</h3>
          <p>href: {href}</p>
          <p>origin: {origin}</p>
          <p>pathname: {pathname}</p>
          <br />
          <p>
            Go back <Link to="/">home</Link>
          </p>
        </div>
      </Layout>
    );
  }
}

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string,
    origin: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
};

export default props => (
  <Location>
    {locationProps => <NotFoundPage {...locationProps} {...props} />}
  </Location>
);
