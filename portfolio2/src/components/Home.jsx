import { Float, Html, Text3D, useGLTF } from "@react-three/drei"
import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../context/UserContext"
import gsap from 'gsap'
import { EffectComposer, Glitch, Noise, ToneMapping, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from "postprocessing"
import * as THREE from 'three'

const Home = () => {

  const { changePosition, projects, currentProjectIndex, showMenu, about , home, myProject, contact} = useContext(UserContext);

  let first = useRef();
  let second = useRef();
  let third = useRef();
  let fourth = useRef();
  let fifth = useRef();
  let sixth = useRef();
  let seven = useRef();
  let eight = useRef();
  let nine = useRef();
  let ten = useRef();


  
  
  useEffect(() => {


    
      if(changePosition) {
         gsap.to(first.current.position, {
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(second.current.position, {
          x: -10,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: -10,
          y: 2,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: -10,
          y: -2,
          z: 2,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -10,
          y: -2,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: 6,
          y: 2,
          z: -10,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(seven.current.position, {
          x: 4,
          y: 2,
          z: -10,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(eight.current.position, {
          x: 4,
          y: 0,
          z: -6,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(nine.current.position, {
          x: 5,
          y: -1.5,
          z: -6,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(ten.current.position, {
          x: 6.5,
          y: -1.5,
          z: -7,
          duration: 2,
          ease: 'power2.inOut'
         });
      }else {
        
        gsap.to(first.current.position, {
          x: -10,
          y: 0,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         
         gsap.to(second.current.position, {
          x: 0,
          y: -2,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: 0,
          y: 3,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: 4,
          y: 0,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -5,
          y: 3,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: -16,
          y: 4,
          z: 3,
          duration: 2,
          ease: 'power2.inOut'
         });
       
         gsap.to(seven.current.position, {
          x: 5,
          y: 3,
          z: -5,
          duration: 2,
          ease: 'power2.inOut'
         });
        
         gsap.to(eight.current.position, {
          x: 5,
          y: -2,
          z: -3,
          duration: 2,
          ease: 'power2.inOut'
         });
       
         gsap.to(nine.current.position, {
          x: -6,
          y: 3,
          z: 5,
          duration: 2,
          ease: 'power2.inOut'
         });
        
         gsap.to(nine.current.position, {
          x: -6,
          y: 3,
          z: 5,
          duration: 2,
          ease: 'power2.inOut'
         });
         
         gsap.to(ten.current.position, {
          x: -5,
          y: -2,
          z: 5,
          duration: 2,
          ease: 'power2.inOut'
         });
      }

// projects
      if(projects) {
        gsap.to(first.current.position, {
          z: 4,
          duration: 2,
          ease: 'power2.inOut',
          
         });

         gsap.to(second.current.position, {
          x: -10,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: -10,
          y: 2,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: -12,
          y: 4,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -16,
          y: 4,
          z: 5,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: -15,
          y: 2,
          z: 6,
          duration: 2,
          ease: 'power2.inOut'
         });

        
         gsap.to(seven.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(eight.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(nine.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(ten.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

        
      // second project
         if(currentProjectIndex === 1) {

          gsap.to(first.current.position, {
            z: 5,
            duration: 2,
            ease: 'power2.inOut',
            
           });
  
           gsap.to(second.current.position, {
            x: -10,
            y: 0.5,
            z: 3,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(third.current.position, {
            x: -10,
            y: 2,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(fourth.current.position, {
            x: -12,
            y: 4,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(fifth.current.position, {
            x: -16,
            y: 4.5,
            z: 5,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(sixth.current.position, {
            x: -18,
            y: 4.5,
            z: 6,
            duration: 2,
            ease: 'power2.inOut'
           });
  
          
           gsap.to(seven.current.position, {
            x: -20,
            y: -20,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(eight.current.position, {
            x: -20,
            y: -20,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(nine.current.position, {
            x: -20,
            y: -20,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(ten.current.position, {
            x: -20,
            y: -20,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
         }


          // third project
          if(currentProjectIndex === 2) {

            gsap.to(first.current.position, {
              z: 4,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(second.current.position, {
              z: 4,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(third.current.position, {
              z: 4,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(fourth.current.position, {
              z: 4,
              y: 4, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(fifth.current.position, {
              z: 6,
              y: 5, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(sixth.current.position, {
              z: 6,
              y: -2, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(seven.current.position, {
              z: 6,
              y: 1.3,
              x: -13, 
              duration: 2,
              ease: 'power2.inOut',
              
             });
    
            
           }

            // fourth project
          if(currentProjectIndex === 3) {

            gsap.to(first.current.position, {
              z: 4,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(second.current.position, {
              z: 4,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(third.current.position, {
              x: -14,
              z: 6,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(fourth.current.position, {
              z: 5,
              y: -20, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(fifth.current.position, {
              z: 6,
              y: 5, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(sixth.current.position, {
              z: 6,
              y: -20, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(seven.current.position, {
              z: 4,
              y: 2,
              x: -10, 
              duration: 2,
              ease: 'power2.inOut',
              
             });
    
            
           }

             // fifth project
          if(currentProjectIndex === 4) {

            gsap.to(first.current.position, {
              z: 4,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(second.current.position, {
              y: 5,
              x: -12,
              z: 2,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(third.current.position, {
              x: -14,
              z: 5,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(fourth.current.position, {
              z: 5,
              y: -20, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(fifth.current.position, {
              z: 6,
              y: 5, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(sixth.current.position, {
              z: 6,
              y: -20, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(seven.current.position, {
              z: 3,
              y: 2,
              x: -10, 
              duration: 2,
              ease: 'power2.inOut',
              
             });
    
            
           }

                // sixth project
          if(currentProjectIndex === 5) {

            gsap.to(first.current.position, {
              z: 4,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(second.current.position, {
              y: -1.5,
              x: -12,
              z: 4,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(third.current.position, {
              x: -14,
              z: 5.5,
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(fourth.current.position, {
              z: 5,
              y: -20, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(fifth.current.position, {
              z: 6,
              y: 5, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(sixth.current.position, {
              z: 6,
              y: -20, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(seven.current.position, {
              z: 5.5,
              y: 0,
              x: -15, 
              duration: 2,
              ease: 'power2.inOut',
              
             });

             gsap.to(eight.current.position, {
              z: 5.5,
              y: -2,
              x: -15, 
              duration: 2,
              ease: 'power2.inOut',
              
             });
    
            
           }

         // seventh project
         if(currentProjectIndex === 6) {
          gsap.to(first.current.position, {
            z: 4,
            duration: 2,
            ease: 'power2.inOut',
            
           });
  
           gsap.to(second.current.position, {
            x: -10,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(third.current.position, {
            x: -10,
            y: 2,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(fourth.current.position, {
            x: -12,
            y: 4,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(fifth.current.position, {
            x: -16,
            y: 5,
            z: 5.5,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(sixth.current.position, {
            x: -15,
            y: 4.5,
            z: 7,
            duration: 2,
            ease: 'power2.inOut'
           });
  
          
           gsap.to(seven.current.position, {
            x: -20,
            y: -20,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(eight.current.position, {
            x: -20,
            y: -20,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(nine.current.position, {
            x: -20,
            y: -20,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
  
           gsap.to(ten.current.position, {
            x: -20,
            y: -20,
            z: 4,
            duration: 2,
            ease: 'power2.inOut'
           });
         }
        

        
       




      }


      
      if(showMenu) {
        gsap.to(first.current.position, {
          z: -4,
          x: 4,
          duration: 2,
          ease: 'power2.inOut',
          
         });

         gsap.to(second.current.position, {
          x: 4,
          y: 0,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: 4,
          y: 0,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: 4,
          y: 0,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -16,
          y: -20,
          z: 5.5,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: -15,
          y: -20,
          z: 7,
          duration: 2,
          ease: 'power2.inOut'
         });

        
         gsap.to(seven.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(eight.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(nine.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(ten.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });
      }


      if(home) {
        gsap.to(first.current.position, {
          z: -4,
          x: 4,
          duration: 2,
          ease: 'power2.inOut',
          
         });

         gsap.to(second.current.position, {
          x: 4,
          y: 0,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: 4,
          y: 0,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: 4,
          y: 0,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -16,
          y: -20,
          z: 5.5,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: -15,
          y: -20,
          z: 7,
          duration: 2,
          ease: 'power2.inOut'
         });

        
         gsap.to(seven.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(eight.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(nine.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(ten.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });
      }

      if(about) {
        gsap.to(first.current.position, {
          z: -4,
          x: 4,
          duration: 2,
          ease: 'power2.inOut',
          
         });

         gsap.to(second.current.position, {
          x: 4,
          y: 3,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: 4,
          y: 0,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: 4,
          y: 0,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -16,
          y: -20,
          z: 5.5,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: -15,
          y: -20,
          z: 7,
          duration: 2,
          ease: 'power2.inOut'
         });

        
         gsap.to(seven.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(eight.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(nine.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(ten.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });
      }

      if(myProject) {
        gsap.to(first.current.position, {
          z: -4,
          x: 4,
          duration: 2,
          ease: 'power2.inOut',
          
         });

         gsap.to(second.current.position, {
          x: 4,
          y: 3,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: 6,
          y: 2,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: 4,
          y: 0,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -16,
          y: -20,
          z: 5.5,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: -15,
          y: -20,
          z: 7,
          duration: 2,
          ease: 'power2.inOut'
         });

        
         gsap.to(seven.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(eight.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(nine.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(ten.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });
      }
   

      if(contact) {
        gsap.to(first.current.position, {
          z: -4,
          x: 4,
          duration: 2,
          ease: 'power2.inOut',
          
         });

         gsap.to(second.current.position, {
          x: 4,
          y: 3,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: 6,
          y: 2,
          z: -4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: 6,
          y: 0,
          z: -3,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -16,
          y: -20,
          z: 5.5,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: -15,
          y: -20,
          z: 7,
          duration: 2,
          ease: 'power2.inOut'
         });

        
         gsap.to(seven.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(eight.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(nine.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(ten.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });
      }
   

      

      
      

  }, [changePosition, projects, currentProjectIndex, showMenu, about, home, myProject, contact]);
     



  return (
     <>



   <Float rotationIntensity={ 0.25 }>
    
      <mesh ref={first} position={[-10, 0, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />

      
      </mesh>

      <mesh ref={second} position={[0, -2, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh ref={third} position={[0, 3, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh ref={fourth} position={[4, 0, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial  />
      </mesh>
    

      <mesh ref={fifth} position={[-5, 3, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh ref={sixth} position={[-16, 0, 3]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial  />
      </mesh>

      <mesh ref={seven} position={[5, 3, -5]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh ref={eight} position={[5, -2, -3]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial  />
      </mesh>

      <mesh ref={nine} position={[-6, 3, 5]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh ref={ten} position={[-5, -2, 5]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial  />
      </mesh>
      
      </Float>

  
     </>
  )
}

export default Home
