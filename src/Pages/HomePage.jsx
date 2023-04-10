import React from 'react'
import WhiteSpace from './WhiteSpace'
import Footer from "./Footer"
import Hero from "./Hero"

function HomePage() {
  return (
    <div id='home' style={{backgroundColor:"white", height:"100vh", width:"100vw"}}>
     
      <Hero/>
      <WhiteSpace/>
      <Footer/>
    </div>
  )
}

export default HomePage
