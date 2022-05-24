import React from "react";

import "./about.css";

const About = () => {
  return (
    <section id="about" className="container about">
      <div className="about__text">
        <h2 className="about__subtitle">Cesar´s Stile</h2>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe sapiente magnam ipsa. Voluptas ducimus repudiandae vero suscipit
          ipsum, iusto perspiciatis saepe possimus ad eveniet veritatis labore
          nam! Laborum, quam.
        </p>
        <a href="#services" className="btm">
          Conoce mis servicios
        </a>
      </div>
      <div className="about__picture_container">
        <figure className="about__picture"></figure>
      </div>
    </section>
  );
};

export default About;
