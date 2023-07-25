import React, { useState } from 'react';
import './rental.css';
import { ToRent } from '../../components/exports';

const Rental = () => {
  const [trackDrop, setTrackDrop] = useState(false);

  const [trackOption, setTrackOption] = useState('Choose');
  const track = `img/${trackOption.toLowerCase().replace(' ', '')}.jpg`;

  return (
    <section className='main__rental section__padding'>
      <h2>Choose your bike and your track!</h2>
      <div className='main__rental-rent'>
        <ToRent
          imgTrack={track.includes('choose') ? 'img/complejomx.jpg' : track}
          track={trackOption !== 'Choose' ? trackOption : 'Complejo MX'}
          imgBike=''
          bike=''
        />
        <div className='main__rental-rent__options'>
          <div className='dropdown'>
            <div
              className='dropdown__menu'
              onClick={() => setTrackDrop(!trackDrop)}
            >
              <p>{trackOption}</p>
            </div>
            <div
              className={
                trackDrop ? 'dropdown__options' : 'dropdown__options hidden'
              }
            >
              <p
                onClick={(e) => {
                  setTrackOption(e.target.innerText);
                  setTrackDrop(false);
                }}
              >
                Complejo MX
              </p>
              <p
                onClick={(e) => {
                  setTrackOption(e.target.innerText);
                  setTrackDrop(false);
                }}
              >
                Pista MX
              </p>
              <p
                onClick={(e) => {
                  setTrackOption(e.target.innerText);
                  setTrackDrop(false);
                }}
              >
                Puerto Madryn
              </p>
            </div>
          </div>

          {/* <Dropdown option1='KTM' option2='YZ' option3='Gasgas MC' /> */}
        </div>
      </div>
    </section>
  );
};

export default Rental;
