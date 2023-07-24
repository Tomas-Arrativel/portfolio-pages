import React from 'react';
import './track.css';

const Track = (props) => {
  return (
    <div className='main__tracks-track'>
      <img src={props.img} alt='mx track image' />
      <div className='main__tracks-track__info'>
        <h2>{props.title}</h2>
        <p>{props.schedules}</p>
        <p>{props.text}</p>
        <button className='main__tracks-track__btn'>Ask for a place</button>
      </div>
    </div>
  );
};

export default Track;
