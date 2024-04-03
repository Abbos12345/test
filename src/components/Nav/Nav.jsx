import React from 'react'
import './nav.css'
import Logo from '../../assets/Logo.png'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <img src={Logo} alt="" />
        <ul>
          <li><a href="">Company</a></li>
          <li><a href="">Logistics</a></li>
          <li><a href="">Transportation</a></li>
          <li><a href="">Drivers 
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a></li>
          <li><a href="">Contact us</a></li>
        </ul>
        <div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.5C1 12.0604 7.93959 19 16.5 19C16.8862 19 17.2691 18.9859 17.6483 18.9581C18.0834 18.9262 18.3009 18.9103 18.499 18.7963C18.663 18.7019 18.8185 18.5345 18.9007 18.364C19 18.1582 19 17.9181 19 17.438V14.6207C19 14.2169 19 14.015 18.9335 13.842C18.8749 13.6891 18.7795 13.553 18.6559 13.4456C18.516 13.324 18.3262 13.255 17.9468 13.117L14.74 11.9509C14.2985 11.7904 14.0777 11.7101 13.8683 11.7237C13.6836 11.7357 13.5059 11.7988 13.3549 11.9058C13.1837 12.0271 13.0629 12.2285 12.8212 12.6314L12 14C9.35014 12.7999 7.2019 10.6489 6 8L7.36863 7.17882C7.77145 6.93713 7.97286 6.81628 8.09423 6.64506C8.20125 6.49408 8.26427 6.31637 8.27629 6.1317C8.28992 5.92227 8.20965 5.70153 8.04911 5.26005L6.88299 2.05321C6.745 1.67376 6.67601 1.48403 6.55442 1.3441C6.44701 1.22049 6.31089 1.12515 6.15802 1.06645C5.98496 1 5.78308 1 5.37932 1H2.56201C2.08188 1 1.84181 1 1.63598 1.09925C1.4655 1.18146 1.29814 1.33701 1.2037 1.50103C1.08968 1.69907 1.07375 1.91662 1.04189 2.35173C1.01413 2.73086 1 3.11378 1 3.5Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>+1 (877) 342-2332</p>
        </div>
      </div>
    </nav>
  )
}

export default Nav