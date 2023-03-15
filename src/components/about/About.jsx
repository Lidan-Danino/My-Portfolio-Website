import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BsGearWideConnected } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <div className="card-text">
                <h5>
                  B.Sc At <br />
                  Computer Science
                </h5>
                <small>HIT</small>
              </div>
            </article>

            <article className="about__card">
              <CgWebsite className="about__icon" />
              <h5>Complete Web Development Bootcamp </h5>
              <small>Practical Course</small>
            </article>

            <article className="about__card">
              <BsGearWideConnected className="about__icon" />
              <h5>Practical Mechanical Engineer</h5>
              <small>Air Force College</small>
            </article>
          </div>

          <p>
            My name is Lidan Danino, I live in Israel. I am 27 years old. I'm
            web developer, Graduated in computer science(B.Sc) at the Holon
            Institute of Technology.
            <br />I am a programmer who is passionate about coding and creating
            new and innovative solutions through software development.
            <br /> In addition i love to read books , video games and play
            tennis with friends.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
