import { useEffect, useState } from "react";
import getImages from "../helpers/getImages";

export const useGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages().then((imgs) => {
      setImages(imgs);
    });
  }, []);
  return images;
};
