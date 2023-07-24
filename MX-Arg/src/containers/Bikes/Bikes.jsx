import React from 'react';
import './bikes.css';
import Bike from '../../components/Bike/Bike';

import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Bikes = () => {
  return (
    <section className='main__bikes section__padding'>
      <h2>Bikes available</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='main__bikes-slider'
      >
        <SwiperSlide>
          <Bike img='' title='' />1
        </SwiperSlide>
        <SwiperSlide>
          <Bike img='' title='' />2
        </SwiperSlide>
        <SwiperSlide>
          <Bike img='' title='' />3
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Bikes;
