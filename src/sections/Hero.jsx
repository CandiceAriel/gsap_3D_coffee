import React,{ Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import { CoffeeCupModel } from '../components/models/Coffee_cup'
import { CaffeBerniniModel } from '../components/models/Caffe_bernini';

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 15], fov: 45 }}
        className="w-full h-[500px]" 
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5} 
          maxPolarAngle={Math.PI / 2} 
        />

        <Suspense fallback={null}>
          <CoffeeCupModel />
        </Suspense>
        <Environment preset="studio" />
      </Canvas>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>Text on top</h1>
      </div>
    </section>

    
  )
}

export default Hero