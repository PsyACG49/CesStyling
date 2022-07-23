import Card from "./card/Card";
import { BiCut } from "react-icons/bi";
import { FaPaintBrush } from "react-icons/fa";
import { GiComb } from "react-icons/gi";
import { GiLargeDress } from "react-icons/gi";

import "./services.css";
import { useCard } from "../../hooks/useCard";

const arrayIcons = [
  {
    iconServicio: <BiCut className="card__icon" />,
  },
  {
    iconServicio: <FaPaintBrush className="card__icon" />,
  },
  {
    iconServicio: <GiComb className="card__icon" />,
  },
  {
    iconServicio: <GiLargeDress className="card__icon" />,
  },
];

const Services = () => {
  const cards = useCard();

  return (
    <section id="services" className="container services">
      <h2 className="services__title">Servicios</h2>
      <p>
        Por que la belleza nos hace sentir vivos. Atrevete a reinventarte y
        consentirte con alguno de mis servicios.
      </p>
      <div className="services__main" data-aos="fade-up">
        {cards.map((el, index) => (
          <Card info={el} key={index}>
            {arrayIcons[index].iconServicio}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
