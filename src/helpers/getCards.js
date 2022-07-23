const getCards = async () => {
  const res = await fetch("https://api-ces-style.herokuapp.com/api/v1/cards/");
  const cards = await res.json();
  return cards;
};

export default getCards;
