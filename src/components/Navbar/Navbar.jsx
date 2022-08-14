import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-1/1 bg-transparent'>
        <div className="w-11/12  mx-auto text-white flex justify-between">
            <div className='flex text-center items-center'>
                <img src="/logo.png" className='w-20 invert '  alt="t" />
                <h1 className='text-3xl font-bold font-serif'>The Sweat Arena</h1>
            </div>
            <ul className='flex text-center items-center gap-12'>
                <li className='tracking-widest cursor-pointer text-xs font-medium hover:underline transition-all hover:text-gray-500'>HOME</li>
                <li className='tracking-widest cursor-pointer text-xs font-medium hover:underline transition-all hover:text-gray-500'>PAGES</li>
                <li className='tracking-widest cursor-pointer text-xs font-medium hover:underline transition-all hover:text-gray-500'>PORTFOLIO</li>
                <li className='tracking-widest cursor-pointer text-xs font-medium hover:underline transition-all hover:text-gray-500'>VLOG</li>
                <li className='tracking-widest cursor-pointer text-xs font-medium hover:underline transition-all hover:text-gray-500'>SHOP</li>
            </ul>
            <div className='gap-8 flex items-center mx-4'>
                <button className='bg-white text-black py-2 font-bold px-5 border-2 rounded-full hover:bg-black hover:text-white tracking-wider cursor-pointer transition-all'>Book Now</button>
                <span className='text-3xl px-2 py-1 border-2 rounded-full border-red-50 cursor-pointer'><i class="uil uil-bars"></i></span>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
