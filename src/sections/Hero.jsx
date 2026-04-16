import React,{ Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import { CoffeeCupModel } from '../components/models/Coffee_cup'
import { CoffeePaperBagModel } from '../components/models/Coffee_paper_bag';

const Hero = () => {
  return (
    <section id="hero" className="flex-row ">
      <div>
        <p>LEFT</p>
      </div>
      {/* RIGHT : 3D MODEL */}
      <div className="h-full">
          <Canvas
            shadows
            camera={{ position: [5, 0, 10], fov: 20 }}
            className="w-full" 
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={2} />

            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              // CRITICAL: This centers the bag in the camera view 
              // adjust the '2' up or down to move the bag's position in the frame
              target={[-2, 0 , 1]} 
              minPolarAngle={Math.PI / 5} 
              maxPolarAngle={Math.PI / 2} 
            />

            <Suspense fallback={null}>
              <CoffeePaperBagModel />
            </Suspense>
            <Environment preset="studio" />
          </Canvas>
      </div>
      
      
    </section>

    
  )
}

export default Hero