import React from 'react'
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

const AboutMe = () => {
  return (
    <div className='absolute w-full h-screen top-0 left-0 flex items-center justify-start p-24 '>
       <div className='flex flex-col gap-6'>
         <h1 className='text-7xl text-white font-bold underline decoration-2 underline-offset-8'>Luka Chikashvili</h1>
         <h2 className='text-5xl text-[#F5F7F8]'>Web developer</h2>

         <p className='text-white text-2xl w-1/2 '>
            aspiring web developer living in georgia. dedicated to create creative websites and beautiful user interfaces.
         </p>

         <h2 className='text-white text-4xl'>//skills</h2>

         <div className=' w-1/2 flex flex-wrap gap-4  '>
            <img className='w-12' src = {html} />
            <img className='w-12' src = {css} />
            <img className='w-12' src = {js} />
            <img className='w-12' src = {react} />
            <img className='w-12' src = {three} />
            <img className='w-12' src = {node} />
            <img className='w-12' src = {mongo} />
            <img className='w-12' src = {typescript} />
            <img className='w-12' src = {sass} />
            <img className='w-12' src = {tail} />
         </div>
       </div>
    </div>
  )
}

export default AboutMe
