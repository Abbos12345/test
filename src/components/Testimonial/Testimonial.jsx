import React, {useState} from 'react'
import './testimonial.css'

import Star from '../../assets/logo/Star.png'
import Pic from '../../assets/img/Image.png'
import Pic2 from '../../assets/img/Img2.png'


const dummy = [
  {
    photo: Pic,
    comment: "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    stars: "5",
    name: "— Mathilde Lewis",
    occupation: "Inventory Associate in Las Vegas, NV"
  },
  {
    photo: Pic2,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellat quam hic corrupti consectetur nostrum facilis rerum repellendus!",
    stars: "5",
    name: "— Abbos Hodjaev",
    occupation: "Webdev"
  },
  {
    photo: Pic,
    comment: "content3",
    stars: "1",
    name: "— John Mark",
    occupation: "IT Park in Tashkent"
  },
  {
    photo: Pic2,
    comment: "content4",
    stars: "1",
    name: "— Alex Anderson",
    occupation: "Beeline in Tashken"
  },
];

// import data from './data'



const Testimonial = () => {
  
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className='testimonial__container'>
      <div className='testimonial__container--top'>
        <h4>What clients say about us</h4>
        <span>
          <button
            style={{ cursor: "pointer"}}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 8H1M1 8L8 15M1 8L8 1"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button
            style={{ cursor: "pointer"}}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === dummy.length}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </button>
        </span>
      </div>
      <div className='testimonial__container--bottom'>
        {dummy
          .slice(currentPage === 0 ? 0 : currentPage - 1, currentPage)
          .map((item) => (
            <>
              <div className="testimonial--img">
                <img src={item.photo} alt='img'/>
              </div>
              <div className="testimonial--typography">
                <div className="testimonial--typography-column">
                  <div className="testimonial--typography-stars">
                    <div><img src={Star} alt="" /></div>
                    <div><img src={Star} alt="" /></div>
                    <div><img src={Star} alt="" /></div>
                    <div><img src={Star} alt="" /></div>
                    <div><img src={Star} alt="" /></div>
                  </div>
                  <div className="testimonial--typography-text">
                    <p>{item.comment}</p>
                  </div>                  
                </div>
                <div className="testimonial--typography-name">
                  <p>{item.name}</p>
                </div>
                <div className="testimonial--typograpy-occupation">
                  <p>{item.occupation}</p>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  )
}

export default Testimonial