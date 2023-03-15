import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";
import Typed from "react-typed";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          <Typed
            strings={["Hello I'm"]}
            typeSpeed={170}
            showCursor={false}
            smartBackspace={false}
          />
        </h5>
        <h1>
          <Typed
            strings={["Lidan Danino."]}
            typeSpeed={140}
            smartBackspace={false}
          />
        </h1>
        <h5 className="text-light">
          <Typed
            strings={["Web Developer"]}
            typeSpeed={160}
            showCursor={false}
            smartBackspace={false}
          />
        </h5>
        <CTA />
        <section className="image-sec">
          <HeaderSocial />
          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </section>
      </div>
    </header>
  );
};

export default Header;
