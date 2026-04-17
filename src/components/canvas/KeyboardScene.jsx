import React, { Suspense } from 'react';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import { KeyboardModel } from '../models/Blue_white_wavy_mechanical_keyboard';

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
      
      <ambientLight intensity={1} />
      <pointLight position={[0,1,5]} intensity={2} />

      {/* 2. THE TRANSFORMATION 
          Rotation is in Radians. 
          x: -0.6 (Tilts the top towards the camera)
          y: 0.2  (Slight horizontal turn)
          z: 0.4  (Creates that 'slanted' diagonal look)
      */}
      <group 
        position={[-3,-0.4,0]}
        rotation={[1.6, 0.3, 0]}
        scale={9}
      >
        <Suspense fallback={null}>
          <KeyboardModel />
        </Suspense>
      </group>

      <Environment preset="city" environmentIntensity={0.5} />
    </>
  );
};

export default Scene;