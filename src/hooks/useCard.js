import { useState, useEffect } from "react";
import getCards from "../helpers/getCards";

export const useCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  return cards;
};
