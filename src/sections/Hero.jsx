import React,{ Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Scene from '../components/canvas/KeyboardScene';

const Hero = () => {
  return (
    <section id="hero">
      <div className="h-full w-full">
          <Canvas>
            <Scene />
          </Canvas>
      </div>
      
      
    </section>

    
  )
}

export default Hero