import React from "react";

import "./card.css";

const Card = ({ children, info }) => {
  const { servicios } = info;

  return (
    <article className="card">
      <div className="card__header">
        {children}
        <h3 className="card__title">{info.nombreServicio}</h3>
      </div>
      <ul className="card__list">
        {servicios.map((servicio) => (
          <li>
            <p>{servicio.tipo}</p>
            <p>{`$${servicio.precio}`}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Card;
