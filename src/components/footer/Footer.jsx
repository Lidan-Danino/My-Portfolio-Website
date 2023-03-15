import React from "react";
import "./footer.css";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expeirience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/lidani363">
          <BsFacebook />
        </a>
        <a href="https://www.linkedin.com/in/lidan-danino-262196205/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Lidan-Danino">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lidan Danino copyright.</small>
      </div>
    </footer>
  );
};

export default Footer;
