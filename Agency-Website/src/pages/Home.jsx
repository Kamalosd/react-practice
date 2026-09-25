import React from 'react'
import Hero from '../components/Hero'
import Company from '../components/Company'
import Service from '../components/Service'
import Work from '../components/Work'
import Teams from '../components/Teams'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Company/>
      <Service/>
      <Work/>
      <Teams/>
      <Contact/>
    </div>
  )
}

export default Home
