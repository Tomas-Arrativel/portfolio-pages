import React from 'react';
import './bike.css';

const Bike = (props) => {
  return (
    <div className='main__bikes-bike'>
      <img src={props.img} alt='image of the dirtbike' />
      <h2>{props.title}</h2>
    </div>
  );
};

export default Bike;
