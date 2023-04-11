import React from 'react'

import { Navbar } from '../../components'
import { images } from '../../constants'
import './Hero.scss'
const Hero = () => {
  return (
    <>
     <div className='travel__hero-container'>
      <Navbar />
      <div className='travel__hero-decoreImg'>
        <img src={images.decore} alt='decore'/>
      </div>
     </div>
    <div className='travel__hero-content'>
      <div className='travel__hero-description'>
        <h3>Best Destinations around the world</h3>
      
        <div className='travel__hero-title'>
          <h1>Travel, enjoy <br /> and live a <br /> new  and full life</h1>
          <img src={images.underline} alt='underline img'/>
        </div>

        <div className='travel__hero-paragraphe'>
          <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
        </div>

        <div className='travel__hero-cta'>
          <button type='button'>Find out more</button>

          <div className='travel__hero-playDemo'>
            <img src={images.playButton} alt='play button'/> 
            <p>Play demo</p>
          </div>
        </div>
      </div>
      <div className='travel__hero-img'>
          <img className='travel__hero-traveller' src={images.traveller} alt="traveller img" />
      </div>
    </div>

    </>
  )
}

export default Hero