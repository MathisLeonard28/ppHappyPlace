import React from 'react';
import './cards.css';
import CardItem from './CardItem';



const AboutUsCard = () => {
  return (
    <div className='cards'>
      <h1>About Us</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/us.jpeg'
              text='A dedicated indie studio who loves making games.'
              label='Who We Are'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/landscape.jpeg'
              text='We love making the games we love to play.'
              label='What We Make'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard;