const getCards = async () => {
  const res = await fetch(
    "https://backgallery-production.up.railway.app/api/v1/cards"
  );
  const cards = await res.json();
  return cards;
};

export default getCards;
