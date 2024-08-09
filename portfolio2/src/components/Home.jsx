



import { useGLTF, useMatcapTexture } from '@react-three/drei'
import React, { useEffect } from 'react'


const Home = () => {

// use matcap material
const [ texture ] = useMatcapTexture('637598_B7C4D3_22293A_9BACBF', 256);

// street light 3d model
const streetLight = useGLTF('./street_light.glb');


     
  return (
     <>
     
     <mesh position = {[ 0, -2, 0 ]} rotation = {[ -Math.PI * 0.5, 0, -0.8 ]}>
       <planeGeometry args={[ 150, 10 ]}/>
       <meshMatcapMaterial matcap={texture} />

     </mesh>

     <primitive object={streetLight.scene} scale = {0.06} position = {[ 0, -2, 0 ]} />
 
 

    
     </>
  )
}

export default Home
