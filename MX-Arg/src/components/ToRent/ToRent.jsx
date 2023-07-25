import React from 'react';
import './toRent.css';

const ToRent = (props) => {
  return (
    <div className='main__rental-rent__torent'>
      <div className='track-container'>
        <img src={props.imgTrack} alt='Track to rent' />
        <h3>{props.track}</h3>
      </div>
      <div className='bike-container'>
        <img src={props.imgBike} alt='Bike to rent' />
        <h3>{props.bike}</h3>
      </div>
    </div>
  );
};

export default ToRent;
