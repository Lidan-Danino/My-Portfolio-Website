import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "Swappi - smart and automatic tickets trading website (Prototype as part of POC)",
    github: "https://github.com/Lidan-Danino/AnyTicket-client",
    demo: "https://anyticket.netlify.app/",
    text: "Live Demo",
  },
  {
    id: 2,
    image: IMG2,
    title: "Red-Alerts-Analyze - Data Science Project - (Python)",
    github: "https://github.com/Lidan-Danino/Red-Alerts-Analyze",
    demo: null,
    text: null,
  },
  {
    id: 3,
    image: IMG3,
    title: "My personal website content",
    github: "https://github.com",
    demo: null,
    text: null,
  },
  {
    id: 4,
    image: IMG4,
    title: "Simon Game - The nostalgic game",
    github: "https://github.com/Lidan-Danino/Simon_Game",
    demo: "https://simongame-lidan.netlify.app",
    text: "Live Demo",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, text }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className={demo === null ? "" : "btn btn-primary"}
                  target="_blank"
                >
                  {text}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
