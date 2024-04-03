import React from 'react'
import './contacts.css'

import EmailLogo from '../../assets/logo/mail.png'
import OfficeLogo from '../../assets/logo/office.png'
import PhoneLogo from '../../assets/logo/phone.png'
import Map from '../../assets/img/Content.png'

const Contacts = () => {
  return (
    <div className='contacts__container'>
      <div className="contacts__container--top">
        <h3>Get in touch</h3>
        <p>Reach out to us with any questions, concerns or inquiries you may have, and we’ll <br /> do everything we can to help.</p>
      </div>
      <div className="contacts__container--bottom">
        <div className="contacts__container--bottom__content">
          <div className="content">
            <div className="content--logo">
              <div>
                <img src={EmailLogo} alt="" />
              </div>
            </div>
            <div className="content--typography">
              <h4>Email</h4>
              <p>Our friendly team is here to help.</p>
              <h5>hi@advancedtranc.com</h5>
            </div>
          </div>
          <div className="content">
            <div className="content--logo">
              <div>
                <img src={OfficeLogo} alt="" />
              </div>
            </div>
            <div className="content--typography">
              <h4>Office</h4>
              <p>Come say hello at our office HQ</p>
              <h5>100 Smith Street <br /> Collingwood VIC 3066 AU</h5>
            </div>
          </div>
          <div className="content">
            <div className="content--logo">
              <div>
                <img src={PhoneLogo} alt="" />
              </div>
            </div>
            <div className="content--typography">
              <h4>Phone</h4>
              <p>Mon-Fri from 8am to 5pm</p>
              <h5>+1 (555) 000-0000</h5>
            </div>
          </div>
        </div>
        <div className="contacts__container--bottom__map">
          <img src={Map} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contacts