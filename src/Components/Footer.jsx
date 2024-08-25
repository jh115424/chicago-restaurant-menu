import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="credit-card-info">
          <p>
            We accept all major credit cards: Visa, MasterCard, American Express
            and Diner's Club
          </p>
        </div>

        <div className="contact-info">
          <h1 className="stay-in-touch">CONTACT ME</h1>
          <a href="https://www.instagram.com/jh115424/">
            <img src="/public/instagram.png" className="social-media"></img>
            <li>Instagram</li>
          </a>
          <a href="https://www.linkedin.com/in/code-creators-b892b0260/">
            <img src="/public/linkedin.png" className="social-media"></img>
            <li>LinkedIn</li>
          </a>
        </div>
      </footer>
      <div className="copyright">@copyright 2024 All rights reserved</div>
    </>
  );
};

export default Footer;
