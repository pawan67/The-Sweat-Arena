import React from 'react'
import { motion } from 'framer-motion'

const Fit = () => {
    const transition = {type: 'spring', duration: 3}
    const data = [
        {
            img:"Assets/images/routine1.png",
            Naame:"ABS"
        },
        {
            img:"Assets/images/routine2.png",
            Naame:"BACK"
        },
        {
            img:"Assets/images/routine3.png",
            Naame:"ARMS"
        },
        {
            img:"Assets/images/routine4.png",
            Naame:"LEGS"
        },
        {
            img:"Assets/images/routine5.png",
            Naame:"SHOULDERS"
        },
    ]
  return (
    <>
        <div className='w-11/12 mx-auto'>
            <div className='relative text-white z-10'>
                <motion.span
                initial={{left:"15rem"}}
                whileInView={{left:"-1.5rem"}}
                transition={transition}
                className='absolute -z-10 -top-0 font-bold text-9xl -left-6 muted'>LOOK</motion.span>
                <span className=' absolute top-8 z-20 text-7xl font-bold '><sup className='font-thin'><i class="uil uil-plus"></i></sup>ROUTINES</span>
            </div>
            <div className='text-white flex pt-40'>
                {data.map((value,index) => {
                    return(
                        <div className='mx-auto text-center' key={index}>
                            <img className='m-8' src={value.img} alt="" />
                            <span className='font-bold text-4xl mt-8'>{value.Naame}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Fit
