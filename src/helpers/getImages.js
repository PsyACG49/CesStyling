const getImages = async () => {
  const res = await fetch(
    "https://backgallery-production.up.railway.app/api/v1/images"
  );
  const images = await res.json();

  return images;
};

export default getImages;
