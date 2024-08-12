import { ArrowRight } from 'lucide-react'
import React, { useEffect } from 'react'
import gsap from 'gsap'



const ProjectName = ({name, stack1, stack2, stack3, stack4, stack5, stack6}) => {

     useEffect(() => {
        gsap.to('h2', {
            opacity: 1,
            y: -2,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1
        })

        gsap.to('.stacks', {
            opacity: 1,
            y: -2,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1.3
        })


        gsap.to('.btn1', {
            opacity: 1,
            y: -2,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1.5
        })

        gsap.to('.btn2', {
            opacity: 1,
            y: -2,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1.6
        })
     }, [])


  return (
    <div className='absolute bg-transparent w-full h-screen top-0 left-0 flex  items-center justify-center project-name'>
        <div className='flex flex-col gap-8'> 
      <h2 className='text-6xl mt-96 text-white underline underline-offset-8 decoration-2 opacity-0'>{name}</h2>

 <div className='flex gap-4 stacks'>
      <p className='text-3xl  text-white'>{stack1}</p>
      <p className='text-3xl  text-white'>{stack2}</p>
      <p className='text-3xl  text-white'>{stack3}</p>
      <p className='text-3xl  text-white'>{stack4}</p>
      <p className='text-3xl  text-white'>{stack5}</p>
      <p className='text-3xl  text-white'>{stack6}</p>
      </div>


      <div className='text-white flex items-center gap-8 text-2xl'>
          <button className='flex items-center gap-4 btn1'> Github <ArrowRight /></button>
          <button className='flex items-center gap-4 btn2'> Live <ArrowRight /></button>
      </div>
      </div>
    </div>
  )
}

export default ProjectName
