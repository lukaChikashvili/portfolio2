import React, { useContext, useEffect, useState } from 'react';
import gsap from 'gsap';
import { UserContext } from '../context/UserContext';
import { ArrowRight,  } from 'lucide-react';

const ProjectName = ({ projects }) => {

   const { currentProjectIndex, setCurrentProjectIndex } = useContext(UserContext);
  
    const currentProject = projects[currentProjectIndex];

 

    useEffect(() => {
        gsap.to('h2', {
            opacity: 1,
            y: -2,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1
        });

        gsap.to('.stacks', {
            opacity: 1,
            y: -2,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1.3
        });

        gsap.to('.btn1', {
            opacity: 1,
            y: -2,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1.5
        });

        gsap.to('.btn2', {
            opacity: 1,
            y: -2,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1.6
        });



        if(projects === false) {
            gsap.to('h2', {
                opacity: 0,
                y: -2,
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 1.5,
                ease: "power2.inOut",
                delay: 1
            });
    
            gsap.to('.stacks', {
                opacity: 0,
                y: -2,
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 1.5,
                ease: "power2.inOut",
                delay: 1.3
            });
    
            gsap.to('.btn1', {
                opacity: 0,
                y: -2,
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 1.5,
                ease: "power2.inOut",
                delay: 1.5
            });
    
            gsap.to('.btn2', {
                opacity: 0,
                y: -2,
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 1.5,
                ease: "power2.inOut",
                delay: 1.6
            });
        }
    }, [currentProjectIndex]); 


    // github links
    const showGithub = () => {
        if(currentProjectIndex === 0) {
            window.open("https://github.com/lukaChikashvili/MixMaster", "_blank", "noopener,noreferrer");
            
        }else if(currentProjectIndex === 1) {
            window.open("https://github.com/lukaChikashvili/neoWriters2", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 2) {
            window.open("https://github.com/lukaChikashvili/EternalMemories", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 3) {
            window.open("https://github.com/lukaChikashvili/Circus-Mircus", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 4) {
            window.open("https://github.com/lukaChikashvili/vangadamus", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 5) {
            window.open("https://github.com/lukaChikashvili/cigars", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 6) {
            window.open("https://github.com/lukaChikashvili/saflavis-qva", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 7) {
            window.open("https://github.com/lukaChikashvili/Portfolio", "_blank", "noopener,noreferrer");
        }
    }

    // live links
    const showLive = () => {
        if(currentProjectIndex === 0) {
        window.open("https://mix-master-seven.vercel.app/", "_blank", "noopener,noreferrer");
            
        }else if(currentProjectIndex === 1) {
            window.open("https://neowriters-front.onrender.com", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 2) {
            window.open("https://eternal-memories.onrender.com/", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 3) {
            window.open("https://circus-mircus.netlify.app/", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 4) {
            window.open("https://vangadamus.vercel.app/", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 5) {
            window.open("https://cigars-kappa.vercel.app/", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 6) {
            window.open("https://saflavis-qva.vercel.app/", "_blank", "noopener,noreferrer");
        }else if(currentProjectIndex === 7) {
            window.open("https://portfolio-ten-sigma-68.vercel.app/", "_blank", "noopener,noreferrer");
        }
    }
    
    const handleNext = () => {

        

        gsap.to('.project-name', {
            opacity: 0,
            y: 20,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 0.7,
            ease: "power2.inOut",
            
            onComplete: () => {
                setCurrentProjectIndex((prevIndex) =>
                    prevIndex === projects.length - 1 ? 0 : prevIndex + 1
                );
                gsap.to('.project-name', {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.inOut",
                });
            }
        });
    };

    return (
        <div className='absolute bg-transparent w-full h-screen top-0 left-0 flex items-center justify-center project-name'>
            <div className='flex flex-col gap-8'>
                <h2 className='text-6xl mt-96 text-white underline underline-offset-8 decoration-2 opacity-0'>{currentProject.name}</h2>
                <div className='flex gap-4 stacks'>
                    {currentProject.stacks.map((stack, index) => (
                        <p key={index} className='text-3xl text-white'>{stack}</p>
                    ))}
                </div>
                <div className='text-white flex items-center gap-8 text-2xl'>
                    <button className='flex items-center gap-4 btn1' 
                       onClick={showGithub}
                    >Github <ArrowRight /></button>
                    <button className='flex items-center gap-4 btn2' onClick={showLive}>Live <ArrowRight /></button>
                </div>
                <h2 className='text-white cursor-pointer absolute right-12 bottom-12' onClick={handleNext}>Next</h2>
            </div>
        </div>
    );
}

export default ProjectName;
