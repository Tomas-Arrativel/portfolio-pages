import React from 'react';
import './tracks.css';
import { Track } from '../../components/exports';

const Tracks = () => {
  return (
    <section className='main__tracks section__padding' id='tracks'>
      <Track
        img='img/complejomx-bragado.jpg'
        title='Complejo MX'
        schedules='11:11 - 18:18'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis natus saepe, deleniti iusto consectetur doloribus temporibus enim, assumenda tenetur repudiandae quae? Nobis eius officia, unde exercitationem accusamus sit accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis natus saepe, deleniti iusto consectetur doloribus temporibus enim'
      />
      <Track
        img='img/pistamx.jpg'
        title='Pista MX'
        schedules='11:11 - 18:18'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis natus saepe, deleniti iusto consectetur doloribus temporibus enim, assumenda tenetur repudiandae quae? Nobis eius officia, unde exercitationem accusamus sit accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis natus saepe, deleniti iusto consectetur doloribus temporibus enim'
      />
      <Track
        img='img/puertomadryn.jpg'
        title='Puerto Madryn'
        schedules='11:11 - 18:18'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis natus saepe, deleniti iusto consectetur doloribus temporibus enim, assumenda tenetur repudiandae quae? Nobis eius officia, unde exercitationem accusamus sit accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis natus saepe, deleniti iusto consectetur doloribus temporibus enim'
      />
    </section>
  );
};

export default Tracks;
