import React from "react";
import IMG from "../../assets/ilustracionBarber.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__main">
        <a href="#" className="footer__logo">
          Cesar´s Style
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#about">Acerca de</a>
          </li>
          <li>
            <a href="#experience">Servicios</a>
          </li>
          <li>
            <a href="#services">Galeria</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>

        <div className="footer__img">
          <img src={IMG} alt="imagen barber" />
        </div>
      </div>

      <div className="footer__copyright">
        <small>&copy; Andres Cuevas. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
