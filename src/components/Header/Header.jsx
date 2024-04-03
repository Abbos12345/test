import React from 'react'
import './header.css'
import Nav from '../Nav/Nav'
import BgImage from'../../assets/img/Hero image.png'

const Header = () => {
  return (
    <header className='header__container'>
      <Nav/>
      <div className="header__container--left">

      </div>
      <div className="header__container--right">
        <img src={BgImage} alt="" />
      </div>
      <div className="header__container--content">
        <div className="header__container--content__pagination">
          <p>Home</p>
          <div>&#62;</div>
          <p>Contact Us</p>
        </div>
        <div className="header__container--content__typography">
          <h3>Contact Us</h3>
          <h1>Find the right opportunity for <br/> your business</h1>
        </div>
      </div>
    </header>
  )
}

export default Header