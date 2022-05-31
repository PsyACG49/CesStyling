import React from "react";

import GALERY1 from "../../assets/galeria1.jpg";
import GALERY2 from "../../assets/galeria2.jpg";
import GALERY3 from "../../assets/galeria3.jpg";
import GALERY4 from "../../assets/galeria4.jpg";
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
  return (
    <section id="galery" className='container galery__container'>
      <h2>Galeria</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        iusto.
      </p>
      <div>
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
          // slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        >
          <SwiperSlide>
            <img className="img-galery" src={GALERY1} alt="img galeria" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-galery" src={GALERY2} alt="img galeria" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-galery" src={GALERY3} alt="img galeria" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-galery" src={GALERY4} alt="img galeria" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Galery;
