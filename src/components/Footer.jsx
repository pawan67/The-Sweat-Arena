import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-black text-white'>
        
        <hr className='border-white opacity-75'/>
        <div className='py-4 px-8 flex flex-col gap-16 items-center justify-center h-80'>
          <div className='text-white flex gap-16 text-4xl cursor-pointer'>
              <span><i class="uil uil-youtube"></i></span>
              <span><i class="uil uil-twitter"></i></span>
              <span><i class="uil uil-instagram"></i></span>
              <span><i class="uil uil-facebook-f"></i></span>
              <span><i class="uil uil-snapchat-square"></i></span>
          </div>
            <div className=''>
              <h1 className='font-bold font-serif text-5xl muteed'>THE SWEAT ARENA</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
