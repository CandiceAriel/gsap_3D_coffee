import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from './sections/Hero'

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <>
      <div className=' flex-center h-[100vh]'>
        <h1 className='text-3xl text-coffee-bean'>Welcome to the shop!</h1>
      </div>
    </>
    
  )
}

export default App