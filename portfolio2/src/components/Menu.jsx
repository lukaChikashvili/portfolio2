import React, { useContext, useEffect, useState } from 'react';
import gsap from 'gsap';
import { UserContext } from '../context/UserContext';
import { Github, Linkedin } from 'lucide-react';

const Menu = () => {
  const {
    showMenu,
    setHome,
    setAbout,
    setMyProject,
    setContact,
    setProjects,
    aboutPage,
    setShowMenu,
    setReset,
    setClosed,
    setAboutPage,
    setContactPage,
    contactPage
  } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState('menu');

  useEffect(() => {
    if (showMenu) {
      gsap.to('h2', {
        opacity: 1,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.2,
      });
    } else {
      gsap.to('h2', {
        opacity: 0,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.2,
      });
    }
  }, [showMenu]);

  const goToProjects = () => {
    gsap.to(".text", {
      opacity: 0,
      clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => {
        setProjects(true);
        setClosed(true);
        setReset(false);
        setCurrentPage('projects');
      },
    });
  };

  const openAbout = () => {
    if (currentPage === 'menu') {
      gsap.to('.menu', {
        opacity: 0,
        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          setAboutPage(true);
          setShowMenu(false);
          setCurrentPage('about');
        }
      });
    } else if (currentPage === 'about') {
      goToMenu();
    }
  };

  const goToMenu = () => {
    gsap.to('.about', { 
      opacity: 0,
      clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => {
        setAboutPage(false);
        setShowMenu(true);
        setCurrentPage('menu');
      }
    });
  };


  const handleContact = () => {
    setContactPage(!contactPage);
  }

  const openLink = () => {
    window.open('https://github.com/lukaChikashvili', "_blank", "noopener,noreferrer")
  }

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/luka-chikashvili/', "_blank", "noopener,noreferrer")
  }


  return (
    currentPage === 'menu' ? (
      <div className='absolute w-full h-screen top-0 left-0 flex flex-col gap-8 items-start justify-center px-12 md:px-36 text-5xl md:text-7xl text-white menu'>
        <h2 className='flex items-center gap-2 md:gap-4 opacity-0 cursor-pointer duration-500 ease hover:text-[#31363F]'
            onPointerEnter={() => setHome(true)}
            onPointerLeave={() => setHome(false)}>
          <span className='text-base md:text-xl mt-4 md:mt-6'>//001</span>HOME
        </h2>
        <h2 className='flex items-center gap-2 md:gap-4 opacity-0 cursor-pointer duration-500 ease hover:text-[#31363F]'
            onPointerEnter={() => setAbout(true)}
            onPointerLeave={() => setAbout(false)}
            onClick={openAbout}>
          <span className='text-base md:text-xl mt-4 md:mt-6'>//002</span>ABOUT
        </h2>
        <h2 className='flex items-center gap-2 md:gap-4 opacity-0 cursor-pointer duration-500 ease hover:text-[#31363F]'
            onPointerEnter={() => setMyProject(true)}
            onPointerLeave={() => setMyProject(false)}
            onClick={goToProjects}>
          <span className='text-base md:text-xl mt-4 md:mt-6'>//003</span>PROJECTS
        </h2>
        <h2 className='flex items-center gap-2 md:gap-4 opacity-0 cursor-pointer duration-500 ease hover:text-[#31363F]'
            onPointerEnter={() => setContact(true)}
            onPointerLeave={() => setContact(false)} onClick={handleContact}>
          <span className='text-base md:text-xl mt-4 md:mt-6'>//004</span>CONTACT
        </h2>

        {contactPage && <div className='absolute bottom-12 left-12 md:left-36 flex gap-8'>
             <span className='flex gap-4 text-xl cursor-pointer underline-offset-8 duration-500 ease-in hover:underline' onClick={openLink}><Github /> Github</span>
             <span className='flex gap-4 text-xl cursor-pointer underline-offset-8 duration-500 ease-in hover:underline' onClick={openLinkedin}><Linkedin /> LinkedIn</span>
            </div>}
      </div>
    ) : (
      currentPage === 'about' && (
        <div className='about'>
        
          <button onClick={goToMenu}>Back to Menu</button>

          
        </div>
      )
    )
  );
};

export default Menu;
