import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const Header = ({ siteTitle }) => (
  <header>
    <div className="content">
      <Link to="/">{siteTitle}</Link>
      <ThemeToggler className="right">
        {({ theme, toggleTheme }) => (
          <button
            type="button"
            value={theme}
            onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? (
              <span role="img" aria-label="sun emoji">
                ☀️
              </span>
            ) : (
              <span role="img" aria-label="crescent moon emoji">
                🌜
              </span>
            )}
          </button>
        )}
      </ThemeToggler>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
