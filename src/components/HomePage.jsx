import React from 'react'
import NavBarr from './NavBarr'
import Hero from "./Hero"

function HomePage() {
  return (
    <div style={{backgroundColor:"white", height:"100vh", width:"100vw"}}>
      <NavBarr/>
      <Hero/>
    </div>
  )
}

export default HomePage
