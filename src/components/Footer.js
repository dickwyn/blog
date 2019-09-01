import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="left">© {new Date().getFullYear()}, - Dick Wyn Yong</div>
      <div className="right">
        <a href="www.instagram.com/dickwyn">Instagram</a>
        <a href="www.instagram.com/dickwyn">Home</a>
        <a href="www.instagram.com/dickwyn">Blog</a>
        <a href="www.instagram.com/dickwyn">Contact</a>
        <a href="www.instagram.com/dickwyn">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;
