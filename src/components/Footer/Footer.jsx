import React from 'react'
import './footer.css'

import Logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
      <img src={Logo} alt="" />
        <ul>
          <li><a href="">Company</a></li>
          <li><a href="">Logistics</a></li>
          <li><a href="">Transportation</a></li>
          <li><a href="">Drivers</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
        <p>	&#169; 2024 ADVANCED TRANS INC.</p>
      </div>
    </footer>
  )
}

export default Footer