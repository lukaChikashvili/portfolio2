
import React, { useRef } from 'react'
import vertex from '../shaders/particle/vertex.glsl';
import fragment from '../shaders/particle/fragment.glsl';
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';


const Particles = () => {


    // 2d canvas
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
   
    

    // context

   const context = canvas.getContext('2d');
   context.fillRect(0, 0, canvas.width, canvas.height);
  
   const glowImage = new Image();
   glowImage.src = './circle.png';  

   const displacementTexture = new THREE.CanvasTexture(canvas);

  const texture = useTexture('./images.jpg');
   
    const particleRef = useRef();

    const particleGeometry = new THREE.PlaneGeometry(10, 10, 128, 128);

     const intensityArr = new Float32Array(particleGeometry.attributes.position.count);
     const anglesArr = new Float32Array(particleGeometry.attributes.position.count);

     for(let i = 0; i < particleGeometry.attributes.position.count; i++) {

       intensityArr[i] = Math.random();
       anglesArr[i] = Math.random() * Math.PI * 2;
     }

     particleGeometry.setAttribute('aIntensity', new THREE.BufferAttribute(intensityArr, 1));
     particleGeometry.setAttribute('aAngle', new THREE.BufferAttribute(anglesArr, 1));


    const particleMaterial = new THREE.ShaderMaterial({
       vertexShader: vertex,
       fragmentShader: fragment,
       uniforms: {
        uPictureTexture: new THREE.Uniform(texture),
        uDisplacementTexture: new THREE.Uniform(displacementTexture)
       }
    });

    // raycaster
    const raycaster = new THREE.Raycaster();

    const screenCursor = new THREE.Vector2(9999, 9999);
    const canvasCursor = new THREE.Vector2(9999, 9999);

      window.addEventListener('pointermove', (e) => {
        screenCursor.x = (e.clientX / window.innerWidth) * 2 - 1;
        screenCursor.y = - (e.clientY / window.innerHeight) * 2 + 1;

      });


     

      // interactive plane ref
      let interactiveRef = useRef();

      const { camera } = useThree();

      useFrame(() => {
        raycaster.setFromCamera(screenCursor, camera );
        
        const intersections = raycaster.intersectObject(interactiveRef.current);

      
      if (intersections.length > 0) {
        const intersection = intersections[0];
        if (intersection && intersection.uv) {
            const uv = intersection.uv;
            canvasCursor.x = uv.x * canvas.width;
            canvasCursor.y = (1 - uv.y) * canvas.height;

            
        }
    }
    context.globalCompositeOperation = 'source-over';
    context.globalAlpha = 0.02;
     context.fillRect(0, 0, canvas.width, canvas.height);

       context.globalCompositeOperation = 'lighten'
       context.globalAlpha = 1;
        context.drawImage(
          glowImage, 
          canvasCursor.x,
          canvasCursor.y,
          10, 10
        );


        // updating texture
        displacementTexture.needsUpdate = true;

      })



  return (
   <>
     <primitive ref = {particleRef} object={new THREE.Points(particleGeometry, particleMaterial)} rotation = {[ 0, 0.7, 0 ]} />
     <mesh rotation = {[ 0, 0.7, 0 ]} ref={interactiveRef}>
       <planeGeometry args = {[10, 10]} />
       <meshBasicMaterial visible = {false}/>
     </mesh>
   </>
  )
}

export default Particles
