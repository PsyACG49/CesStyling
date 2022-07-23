import React from "react";

import "./about.css";

const About = () => {
  return (
    <section id="about" className="container about">
      <div className="about__text" data-aos="fade-up">
        <h2 className="about__subtitle">Cesar´s Style</h2>
        <p className="about__paragraph">
          Con mas de 10 años de experiencia brindando estilismo profesional, me
          considero un apasionado por la belleza. Experto en colorimetria,
          cortes y peinados he podido brindar a mis clientes cambios de imagen
          que cumplen todas sus expectativas, siendo su satisfaccion mi
          recompensa.
        </p>
        <a href="#services" className="btm">
          Conoce mis servicios
        </a>
      </div>
      <div className="about__picture_container" data-aos="fade-up">
        <figure className="about__picture"></figure>
      </div>
    </section>
  );
};

export default About;
