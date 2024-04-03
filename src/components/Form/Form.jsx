import React from 'react'
import './form.css'

import BgImage from '../../assets/img/Frame 62.png'
import Icon from '../../assets/logo/Icon.png'

const Form = () => {
  return (
    <div className='form__container'>
      <form action="" className='form__container--form'>

        <div className="column">
          <div className="input-box">
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='First name'/>
          </div>

          <div className="input-box">
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Last name'/>
          </div>
        </div>

        <div className="input-box">
          <label htmlFor="">Email</label>
          <input type="text" placeholder='you@company.com'/>
        </div>

        <div className="input-box input-box--phone">
          <label htmlFor="">Phone Number</label>
          <input type="text" placeholder='+1 (555) 000-0000'/>
          <select name="" id="">
            <option value="">US</option>
            <option value="">RU</option>
          </select>
        </div>

        <div className="input-box">
          <label htmlFor="">City</label>
          <input type="text" placeholder='Enter city'/>
        </div>

        <div className="column">
          <div className="input-box">
            <label htmlFor="">State</label>
            <input type="text" placeholder='Enter state'/>
          </div>

          <div className="input-box">
            <label htmlFor="">Zip code</label>
            <input type="text" placeholder='Enter zip code'/>
          </div>
        </div>

        <div className="input-box">
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10" placeholder='Leave us a message..'></textarea>
        </div>
        <button><div><img src={Icon} /></div>Send a request</button>
      </form>
      <div className="form__container--img">
        <img src={BgImage} alt="" />
      </div>
    </div>
  )
}

export default Form