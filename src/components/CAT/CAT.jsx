import React from 'react'
import './cat.css'

const CAT = () => {
  return (
    <div className='cat__container'>
      <h4>Your future starts now</h4>
      <p>With ADVANCE TRANS INC, you can do more than think about your future – start <br /> building it now.</p>
      <div className="cat__container--btns">
        <button>
          <div>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.25 1.5L5.75 6L1.25 10.5" stroke="#D00022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          Request a Quote
        </button>
        <button> 
          <div>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.25 1.5L5.75 6L1.25 10.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div> 
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default CAT