import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import IMG from "../../assets/ilustracionBarber.svg";
import LOGO from "../../assets/Cstyle.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__main">
        <div>
          <a href="#" className="footer__logo">
            <img
              src={LOGO}
              alt="logotipo CStyle"
              className="footer__main-img"
            />
          </a>
          <div className="footer__socials">
            <a href="https://www.facebook.com/cesar.g.fuentes">
              <AiFillFacebook className="footer__socials_icon" />
            </a>
            <a href="#">
              <AiFillTwitterSquare className="footer__socials_icon" />
            </a>
            <a href="#">
              <AiFillInstagram className="footer__socials_icon" />
            </a>
          </div>
        </div>
        <ul className="permalinks">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#about">Acerca de</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#galery">Galeria</a>
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
