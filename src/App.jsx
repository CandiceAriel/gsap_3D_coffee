import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from './sections/Hero'

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <>
      <div className=' flex-center h-[100vh]'>
        <Hero />
      </div>
    </>
    
  )
}

export default App