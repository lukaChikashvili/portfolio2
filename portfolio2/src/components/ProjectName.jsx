import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { UserContext } from '../context/UserContext';
import { ArrowRight } from 'lucide-react';

const ProjectName = ({ projects }) => {
  const { currentProjectIndex, setCurrentProjectIndex } = useContext(UserContext);
  const currentProject = projects[currentProjectIndex];

  useEffect(() => {
    const animateIn = (selector, delay) => {
      gsap.to(selector, {
        opacity: 1,
        y: -2,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.inOut",
        delay: delay,
      });
    };

    animateIn('h2', 1);
    animateIn('.stacks', 1.3);
    animateIn('.btn1', 1.5);
    animateIn('.btn2', 1.6);

    return () => {
      const animateOut = (selector, delay) => {
        gsap.to(selector, {
          opacity: 0,
          y: -2,
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power2.inOut",
          delay: delay,
        });
      };

      animateOut('h2', 1);
      animateOut('.stacks', 1.3);
      animateOut('.btn1', 1.5);
      animateOut('.btn2', 1.6);
    };
  }, [currentProjectIndex]);

  const showGithub = () => {
    const githubLinks = [
      "https://github.com/lukaChikashvili/MixMaster",
      "https://github.com/lukaChikashvili/neoWriters2",
      "https://github.com/lukaChikashvili/EternalMemories",
      "https://github.com/lukaChikashvili/Circus-Mircus",
      "https://github.com/lukaChikashvili/vangadamus",
      "https://github.com/lukaChikashvili/cigars",
      "https://github.com/lukaChikashvili/saflavis-qva",
      "https://github.com/lukaChikashvili/Portfolio"
    ];
    window.open(githubLinks[currentProjectIndex], "_blank", "noopener,noreferrer");
  };

  const showLive = () => {
    const liveLinks = [
      "https://mix-master-seven.vercel.app/",
      "https://neowriters-front.onrender.com",
      "https://eternal-memories.onrender.com/",
      "https://circus-mircus.netlify.app/",
      "https://vangadamus.vercel.app/",
      "https://cigars-kappa.vercel.app/",
      "https://saflavis-qva.vercel.app/",
      "https://portfolio-ten-sigma-68.vercel.app/"
    ];
    window.open(liveLinks[currentProjectIndex], "_blank", "noopener,noreferrer");
  };

  const handleNext = () => {
    gsap.to('.project-name', {
      opacity: 0,
      y: 20,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentProjectIndex(prevIndex =>
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
    <div className='absolute bg-transparent w-full h-screen top-0 left-0 flex items-center justify-center project-name mt-6'>
      <div className='flex flex-col gap-8 items-center md:items-start mt-56 md:mt-0'>
        <h2 className='text-4xl md:text-6xl mt-24 md:mt-96 text-white underline underline-offset-8 decoration-2 opacity-0'>
          {currentProject.name}
        </h2>
        <div className='flex flex-wrap justify-center gap-2 md:gap-4 stacks'>
          {currentProject.stacks.map((stack, index) => (
            <p key={index} className='text-xl md:text-3xl text-white'>{stack}</p>
          ))}
        </div>
        <div className='text-white flex  md:flex-row items-center gap-4 md:gap-8 text-xl md:text-2xl'>
          <button className='flex items-center gap-2 md:gap-4 btn1 ease-in hover:underline hover:underline-offset-8' 
            onClick={showGithub}>
            Github <ArrowRight />
          </button>
          <button className='flex items-center gap-2 md:gap-4 btn2 hover:underline hover:underline-offset-8' 
            onClick={showLive}>
            Live <ArrowRight />
          </button>
        </div>
        <h2 className='text-white cursor-pointer absolute right-4 md:right-12 bottom-4 md:bottom-12 text-xl md:text-2xl' 
            onClick={handleNext}>
          Next
        </h2>
      </div>
    </div>
  );
}

export default ProjectName;
