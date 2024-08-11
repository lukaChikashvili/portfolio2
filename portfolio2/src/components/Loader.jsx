import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
       <div class="loader"></div>

       <h1 className='text-2xl text-white'>is it gonna load?</h1>

       <p className='absolute bottom-4 text-white'>coded by Luka - 2024</p>
    </div>
  )
}

export default Loader
