const getImages = async () => {
  const res = await fetch("https://api-ces-style.herokuapp.com/api/v1/images");
  const images = await res.json();

  return images;
};

export default getImages;
