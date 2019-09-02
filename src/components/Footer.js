import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="left">© {new Date().getFullYear()} Dick Wyn Yong</div>
        <div className="right">
          <a href="https://instagram.com/dickwyn">Instagram</a>
          <a href="https://twitter.com/dickwyn">Twitter</a>
          <Link to="/">Blog</Link>
          <a href="mailto:dickwyn@outlook.com">Contact</a>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
