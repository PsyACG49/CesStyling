import React from "react";

import "./card.css";

const Card = ({ children, info }) => {
  const { services } = info;

  return (
    <article className="card">
      <div className="card__header">
        {children}
        <h3 className="card__title">{info.serviceName}</h3>
      </div>
      <ul className="card__list">
        {services.map((servicio, index) => (
          <li key={index}>
            <p>{servicio.typee}</p>
            <p>{`$${servicio.price}`}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Card;
