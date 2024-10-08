import React, { useContext, useEffect } from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import three from '../assets/three.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import typescript from '../assets/type.png';
import sass from '../assets/sass.png';
import tail from '../assets/tail.png';
import gsap from 'gsap';
import { ArrowLeft } from 'lucide-react';
import { UserContext } from '../context/UserContext';

const AboutMe = () => {
  const { setAboutPage } = useContext(UserContext);

  useEffect(() => {
    gsap.to("h1", {
      opacity: 1,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power2.inOut",
      delay: 2,
    });

    gsap.to("h2", {
      opacity: 1,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power2.inOut",
      delay: 2.3,
    });

    gsap.to("p", {
      opacity: 1,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power2.inOut",
      delay: 2.5,
    });

    gsap.to("img", {
      opacity: 1,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, []);

  const aboutback = () => {
    setTimeout(() => {
      setAboutPage(false);
    }, 2000);

    gsap.to("h1", {
      opacity: 0,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power2.inOut",
    });

    gsap.to("h2", {
      opacity: 0,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power2.inOut",
    });

    gsap.to("p", {
      opacity: 0,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power2.inOut",
    });

    gsap.to(".img", {
      opacity: 0,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power2.inOut",
      delay: 2,
    });
  };

  return (
    <div className='absolute w-full h-screen top-0 left-0 flex items-center justify-start p-8 md:p-24 aboutme'>
      <div className='flex flex-col gap-6 mt-12 md:mt-0'>
        <h1 className='opacity-0 text-4xl md:text-7xl text-white font-bold underline decoration-2 underline-offset-8'>
          Luka Chikashvili
        </h1>
        <h2 className='opacity-0 text-2xl md:text-5xl text-[#F5F7F8]'>
          Web developer
        </h2>

        <p className='opacity-0 text-white text-lg md:text-2xl w-full md:w-2/3'>
          Aspiring web developer living in Georgia. Dedicated to creating creative websites and beautiful user interfaces.
        </p>

        <h2 className='opacity-0 text-white text-2xl md:text-4xl'>// Skills</h2>

        <div className='w-full flex flex-wrap gap-4 img'>
          <img className='w-10 md:w-12 opacity-0' src={html} />
          <img className='w-10 md:w-12 opacity-0' src={css} />
          <img className='w-10 md:w-12 opacity-0' src={js} />
          <img className='w-10 md:w-12 opacity-0' src={react} />
          <img className='w-10 md:w-12 opacity-0' src={three} />
          <img className='w-10 md:w-12 opacity-0' src={node} />
          <img className='w-10 md:w-12 opacity-0' src={mongo} />
          <img className='w-10 md:w-12 opacity-0' src={typescript} />
          <img className='w-10 md:w-12 opacity-0' src={sass} />
          <img className='w-10 md:w-12 opacity-0' src={tail} />
        </div>

        <div>
          <h2 className='opacity-0 text-white text-2xl md:text-4xl'>// Languages</h2>
          <div className='flex flex-wrap gap-4 text-lg md:text-xl text-white mt-4'>
            <p>Georgian</p>
            <p>English</p>
            <p>Spanish</p>
            <p>Italian</p>
            <p>French</p>
            <p>German</p>
          </div>
        </div>
      </div>

      <span
        className='absolute top-12 flex items-center gap-2 text-[#EEEDEB] cursor-pointer'
        onClick={aboutback}
      >
        <ArrowLeft /> Back to main
      </span>
    </div>
  );
};

export default AboutMe;
