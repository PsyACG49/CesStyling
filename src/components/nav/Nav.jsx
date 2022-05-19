import React, { useState } from "react";
import {HiOutlineMenuAlt3} from "react-icons/hi"
import {IoIosCloseCircleOutline} from "react-icons/io"

import './nav.css'

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="nav container">
      <div className="nav__logo">
        <h2 className="nav__title">Cesar´s Style</h2>
      </div>
      <ul className={`nav__link nav__link--menu ${openMenu === true ? "nav__link--show" : ""}`}>
        <li className="nav__item">
          <a href="#home" className="nav__links">Inicio</a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__links">Acerca de</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__links">Servicios</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__links">Galeria</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__links">Contacto</a>
        </li>

        <IoIosCloseCircleOutline className="nav__close" onClick={() => setOpenMenu(false)}/> 
      </ul>

      <div className="nav__menu">
        <HiOutlineMenuAlt3 className="nav__img" onClick={() => setOpenMenu(true)}/>
      </div>
    </div>
  );
};

export default Nav;
