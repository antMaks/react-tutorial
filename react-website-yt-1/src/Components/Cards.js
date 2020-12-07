import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import imgOne from '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/images/img-1.jpg'
import imgTwo from '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/images/img-2.jpg'
import imgThree from '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/images/img-3.jpg'
import imgFour from '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/images/img-4.jpg'
import imgFive from '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/images/img-5.jpg'
import imgSix from '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/images/img-6.jpg'
import imgSeven from '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/images/img-7.jpg'
import imgNine from '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/images/img-8.jpg'
// import imgTwo from '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/images/img-9.jpg'


function Cards() {

  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={imgOne}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={imgTwo}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={imgThree}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src= {imgFour}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={imgFive}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
