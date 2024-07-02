import React from 'react'
import NavBar from '../NavBar'
import Hero from './Hero'
import About from './About'
import './Lending.css'
import Services from './Services'
import Footer from './Footer'
import AtmCards from './AtmCards'
import Scroll from './Scroll'
import Status from './Status'

export default function LandingPage() {
  return (
    <div className='main-page'>
      <NavBar/>
      {/* <button className='signin-btn-home'>SignIn to your Account</button> */}
      <Hero/>
      <Scroll/>
      <div className='About'>
      <About/>
      </div>
      <Status/>
      <div className='Services'> 
      <Services/>
      </div>
      <div className='Atmcards'>
         <AtmCards/>
      </div>
      
      <Scroll/>
      <div className='Footer'>
        <Footer/>
      </div>
      
      
      
      
    </div>
    
  )
}
