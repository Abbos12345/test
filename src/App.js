import React from 'react'
import { Header, Slider, Form, Contacts, Testimonial, Footer, CAT } from './components/index'

const App = () => {

  return (
    <div className='container'>
        <Header/>
        <Slider/>
        <Form/>
        <Contacts/>
        <Testimonial/>
        <CAT />
        <Footer/>
    </div>
  )
}

export default App