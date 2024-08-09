
import { Text3D, useGLTF, useMatcapTexture } from '@react-three/drei'
import React, { useEffect } from 'react'



const Home = () => {

// use matcap material
const [ texture ] = useMatcapTexture('AB2D08_C35E5A_C75522_C56C70', 256);


// car 3d model
const car = useGLTF('./car.glb');

     
  return (
     <>
     
     <mesh receiveShadow position = {[ 0, -2, 0 ]} rotation = {[ -Math.PI * 0.5, 0, -0.8 ]}>
       <planeGeometry args={[ 150, 10 ]}/>
       <meshMatcapMaterial matcap={texture} />

     </mesh>

    <primitive castshadow object={car.scene} rotation = {[ 0, -2.45, 0 ]}  position = {[0.8, -2, 1 ]} />


    <Text3D font='./helvetiker_regular.typeface.json' 
            size={ 0.75 }
            height={ 0.2 }
            rotation={[0, 2, 0 ]}
            position={[0, -1.9, 5]}
            castShadow
            >
       Scroll
       <meshMatcapMaterial color="#fff" />
    </Text3D>


    
     </>
  )
}

export default Home
