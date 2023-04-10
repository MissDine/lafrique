import React from 'react'
import NavBarr from './NavBarr'
import Hero from "./Hero"
import Footer from "./Footer"
import WhiteSpace from './WhiteSpace'

function HomePage() {
  return (
    <div style={{backgroundColor:"white", height:"100vh", width:"100vw"}}>
      <NavBarr/>
      <Hero/>
      <WhiteSpace/>
      <Footer/>
    </div>
  )
}

export default HomePage
