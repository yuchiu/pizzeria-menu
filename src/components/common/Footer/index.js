import React from "react";

import "./index.scss";

const Footer = () => (
  <footer className="footer-wrapper">
    <a
      className="footer-item footer-item--link"
      href="https://github.com/yuchiu/pizzeria-menu"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github
    </a>
    <span className="footer-item">&#169;2019 Pizzeria</span>
  </footer>
);

export default Footer;
