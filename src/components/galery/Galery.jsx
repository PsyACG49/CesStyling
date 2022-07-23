import React from "react";
import { useGallery } from "../../hooks/useGallery";

//imports swiper
import { EffectCoverflow, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

//import styles
import "./galery.css";

const Galery = () => {
  const images = useGallery();

  return (
    <section id="galery" className="container galery__container">
      <h2>Galeria</h2>
      <p>
        Observa algunos de mis trabajos y contactame. No lo pienses mas y
        atrevete a cambiar tu imagen.
      </p>
      <div data-aos="fade-down">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {images.map((img) => (
            <SwiperSlide key={img._id}>
              <img className="img-galery" src={img.imgUrl} alt="img galeria" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Galery;
