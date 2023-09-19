// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, A11y } from 'swiper/modules';

import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Swiper
        className={styles.hero_carousel}
        // install Swiper modules
        modules={[A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
      >
        <SwiperSlide>
          <img src='imgs/Header/Limited-offer.jpg' alt='Limited offer' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='imgs/Header/special-offer.jpg' alt='special offer' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='imgs/Header/SUPEROFERTAS.png' alt='Super ofertas' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
