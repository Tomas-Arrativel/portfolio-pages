import React, { useState } from 'react';
import './rental.css';
import { ToRent } from '../../components/exports';

const Rental = () => {
  const [trackDrop, setTrackDrop] = useState(false);
  const [bikeDrop, setBikeDrop] = useState(false);

  const [trackOption, setTrackOption] = useState('Choose');
  const track = `img/${trackOption.toLowerCase().replace(' ', '')}.jpg`;

  const [bikeOption, setBikeOption] = useState('Choose');
  const bike = `img/${bikeOption.toLowerCase().replaceAll(' ', '')}.png`;

  console.log(bike);

  return (
    <section className='main__rental section__padding'>
      <h2>Choose your bike and your track!</h2>
      <div className='main__rental-rent'>
        <ToRent
          imgTrack={track.includes('choose') ? 'img/complejomx.jpg' : track}
          track={trackOption !== 'Choose' ? trackOption : 'Complejo MX'}
          imgBike={bike.includes('choose') ? 'img/yz250.png' : bike}
          bike={bikeOption !== 'Choose' ? bikeOption : 'YZ 250'}
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

          <div className='dropdown'>
            <div
              className='dropdown__menu'
              onClick={() => setBikeDrop(!bikeDrop)}
            >
              <p>{bikeOption}</p>
            </div>
            <div
              className={
                bikeDrop ? 'dropdown__options' : 'dropdown__options hidden'
              }
            >
              <p
                onClick={(e) => {
                  setBikeOption(e.target.innerText);
                  setBikeDrop(false);
                }}
              >
                KTM 250
              </p>
              <p
                onClick={(e) => {
                  setBikeOption(e.target.innerText);
                  setBikeDrop(false);
                }}
              >
                YZ 250
              </p>
              <p
                onClick={(e) => {
                  setBikeOption(e.target.innerText);
                  setBikeDrop(false);
                }}
              >
                Gasgas MC 250
              </p>
            </div>
          </div>
        </div>
        <button className='rent-btn'>Rent Now!</button>
      </div>
    </section>
  );
};

export default Rental;
