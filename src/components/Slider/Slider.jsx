import React from 'react'
import './slider.css'
import Marquee from 'react-fast-marquee'
import Logo1 from '../../assets/logo/Vector (2).png';
import Logo2 from '../../assets/logo/Vector (3).png';
import Logo3 from '../../assets/logo/Vector (4).png';
import Logo4 from '../../assets/logo/Vector (5).png';
import Logo5 from '../../assets/logo/Vector (6).png';


const Slider = () => {
  return (
    <div className='slider__container'>
      <Marquee >
        <div className='slider__container--image__wrapper'>
          <img src={Logo1} alt="" />
        </div>
        <div className='slider__container--image__wrapper'>
          <img src={Logo2} alt="" />
        </div>
        <div className='slider__container--image__wrapper'>
          <img src={Logo3} alt="" />
        </div>
        <div className='slider__container--image__wrapper'>
          <img src={Logo4} alt="" />
        </div>
        <div className='slider__container--image__wrapper'>
          <img src={Logo5} alt="" />
        </div>
        <div className='slider__container--image__wrapper'>
          <img src={Logo5} alt="" />
        </div>
        <div className='slider__container--image__wrapper'>
          <img src={Logo5} alt="" />
        </div>  
      </Marquee>
    </div>
  )
}

export default Slider