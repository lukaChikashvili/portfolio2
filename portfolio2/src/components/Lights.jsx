import React from 'react'

const Lights = () => {
  return (
    <>
      <directionalLight
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[2048, 2048]}  
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-bias={-0.0001}  
      />

      <pointLight
        position={[10, 10, 10]}
        intensity={1.0}  
      />

      <ambientLight intensity={0.5} />  // Reduced intensity for better contrast
    </>
  )
}

export default Lights
