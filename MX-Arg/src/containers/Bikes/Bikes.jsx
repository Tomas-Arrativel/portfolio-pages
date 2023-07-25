import React from 'react';
import { useState } from 'react';
import './bikes.css';
import Bike from '../../components/Bike/Bike';

import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Bikes = () => {
  const [displacement, setDisplacement] = useState('125');

  return (
    <section className='main__bikes section__padding'>
      <h2>Bikes available</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop={false}
        navigation
        pagination={{ clickable: true }}
        className='main__bikes-slider'
      >
        <SwiperSlide>
          <Bike
            img={`img/ktm${displacement}.png`}
            title={`KTM SX ${displacement}cc`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Bike
            img={`img/gasgasmc${displacement}.png`}
            title={`GASGAS MC ${displacement}cc`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Bike
            img={`img/yz${displacement}.png`}
            title={`YZ ${displacement}cc`}
          />
        </SwiperSlide>
      </Swiper>

      <div className='main__bikes-displacement'>
        <h3>Displacements available</h3>
        <div>
          <button onClick={() => setDisplacement('125')}>125 cc</button>
          <button onClick={() => setDisplacement('250')}>250 cc</button>
          <button onClick={() => setDisplacement('450')}>450 cc</button>
        </div>
      </div>
    </section>
  );
};

export default Bikes;
